import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { Me } from '@/helpers/decorators/me.decorator';
import { Endpoint } from '@/helpers/decorators/endpoint.decorator';
import { HttpStatusCode } from 'axios';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Endpoint({
    method: 'GET',
    path: 'me',
    statusCode: HttpStatusCode.Ok,
    documentation: {
      summary: 'Get current user',
      description: 'Get current user information',
      security: [
        {
          bearer: [],
        },
      ],
    },
  })
  async me(@Me() me: UserRequest) {
    return this.usersService.me(me.id);
  }
}
