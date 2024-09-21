import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        '.env',
        '.env.development',
        '.env.production',
        '.env.test',
        '.env.local',
      ],
    }),
    DatabaseModule,
    UsersModule,
  ],
})
export class AppModule {}
