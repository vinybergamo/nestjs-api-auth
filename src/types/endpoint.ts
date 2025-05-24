import { HttpStatus } from '@nestjs/common';
import { ApiOperationOptions } from '@nestjs/swagger';

export interface EndpointOptions {
  method:
    | 'GET'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'PATCH'
    | 'HEAD'
    | 'OPTIONS'
    | 'ALL';
  path?: string | string[];
  statusCode?: number | HttpStatus;
  version?: string | string[];
  isPublic?: boolean;
  documentation?: ApiOperationOptions;
}
