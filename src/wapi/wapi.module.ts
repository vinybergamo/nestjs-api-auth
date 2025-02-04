import { Module } from '@nestjs/common';
import { WapiService } from './wapi.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    HttpModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const wapiHost = configService.getOrThrow<string>('WAPI_HOST');
        const wapiKey = configService.getOrThrow<string>('WAPI_KEY');
        const wapiToken = configService.getOrThrow<string>('WAPI_TOKEN');

        return {
          baseURL: wapiHost,
          params: {
            connectionKey: wapiKey,
          },
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${wapiToken}`,
          },
        };
      },
    }),
  ],
  providers: [WapiService],
  exports: [WapiService],
})
export class WapiModule {}
