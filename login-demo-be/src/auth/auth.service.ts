import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';
@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) { }

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.userService.findone(username);
        // console.log(user);
        if (user != null) {
            if (user?.password !== pass) {
                throw new UnauthorizedException("Incorrect login credentials!");
            }
            const payload = { sub: user.id, username: user.username };
            // console.log(await this.jwtService.signAsync(payload));
            return {
                access_token: await this.jwtService.signAsync(payload),
            };
        }
        return null;
    }
}
