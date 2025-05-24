import { HttpStatus } from '@nestjs/common';

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
}
