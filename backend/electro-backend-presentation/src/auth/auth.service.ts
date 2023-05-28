import {BadRequestException, Injectable} from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";
import {AuthDto} from "./dto/auth.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {
    }

    async signup(dto:AuthDto) {
        const {email, password} = dto;

        const existedUser = await this.prisma.users.findUnique({where: {email}});
        if (existedUser) {
            throw new BadRequestException('Email is already used');
        }

        const hashedPassword = await this.hashPassword(password);

        await this.prisma.users.create({
            data: {
                email,
                password_hash: hashedPassword,
            }
        })

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

    async hashPassword(password:string) {
        const saltOrRounds = 10;
        return await bcrypt.hash(password, saltOrRounds);
    }
}
