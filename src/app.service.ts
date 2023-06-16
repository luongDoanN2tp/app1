import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HttpService } from '@nestjs/axios';

const getPublicKeyHref = 'http://localhost:3000/auth/public-key';

@Injectable()
export class AppService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly httpService: HttpService,
  ) {}
  async checkToken(token: string) {
    const publicKey: { data: string } = await this.httpService.axiosRef.get(
      getPublicKeyHref,
    );
    return this.jwtService.verify(token, {
      publicKey: publicKey.data,
      algorithms: ['RS256'],
    });
  }
}
