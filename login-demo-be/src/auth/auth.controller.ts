import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    // console.log(this.authService.signIn(signInDto.username, signInDto.password))
    // TODO problem promise<pending>
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}
