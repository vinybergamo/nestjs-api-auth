import { Module } from '@nestjs/common';
import { InstanceService } from './instance.service';
import { InstanceController } from './instance.controller';
import { InstanceRepository } from './instance.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instance } from './entities/instance.entity';
import { WapiModule } from '@/wapi/wapi.module';

@Module({
  imports: [TypeOrmModule.forFeature([Instance]), WapiModule],
  controllers: [InstanceController],
  providers: [InstanceService, InstanceRepository],
  exports: [InstanceService, InstanceRepository],
})
export class InstanceModule {}
