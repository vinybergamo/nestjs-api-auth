import { Body, Controller, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Endpoint } from '@/helpers/decorators/endpoint.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Endpoint({
    method: 'POST',
    path: 'register',
    statusCode: HttpStatus.CREATED,
    isPublic: true,
  })
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Endpoint({
    method: 'POST',
    path: 'login',
    statusCode: HttpStatus.OK,
    isPublic: true,
  })
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
