import { EndpointOptions } from '@/types/endpoint';
import {
  Get,
  Post,
  Put,
  Delete,
  Patch,
  Head,
  Options,
  All,
  Version,
  HttpCode,
} from '@nestjs/common';
import { applyDecorators } from '@nestjs/common';
import { IsPublic } from './is-public.decorator';

const methodMappers = {
  GET: Get,
  POST: Post,
  PUT: Put,
  DELETE: Delete,
  PATCH: Patch,
  HEAD: Head,
  OPTIONS: Options,
  ALL: All,
};

export function Endpoint(options: EndpointOptions) {
  const { method, path, statusCode, version, isPublic } = options;

  const decorators = [methodMappers[method](path)];
  if (statusCode) {
    decorators.push(HttpCode(statusCode));
  }

  if (version) {
    decorators.push(Version(version));
  }

  if (isPublic) {
    decorators.push(IsPublic());
  }

  return applyDecorators(...decorators);
}
