import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor() {
    }

    async signup() {
        return {
            message: 'sign up was successful',
        };
    }

    async signin() {
        return '';
    }

    async signout() {
        return '';
    }
}
