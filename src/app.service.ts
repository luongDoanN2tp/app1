import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
  constructor(private readonly jwtService: JwtService) {}
  checkToken(secret: string, token: string) {
    return this.jwtService.verify(token, { publicKey: secret });
  }
}
