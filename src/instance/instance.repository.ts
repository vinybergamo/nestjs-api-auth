import { BaseRepository } from '@/database/base-repository';
import { Injectable } from '@nestjs/common';
import { Instance } from './entities/instance.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InstanceRepository extends BaseRepository<Instance> {
  constructor(
    @InjectRepository(Instance)
    private readonly repo: Repository<Instance>,
  ) {
    super(repo);
  }
}
