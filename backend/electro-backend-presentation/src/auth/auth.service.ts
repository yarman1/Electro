import {BadRequestException, ForbiddenException, Injectable} from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";
import {AuthDto} from "./dto/auth.dto";
import * as bcrypt from "bcrypt";
import { JwtService} from '@nestjs/jwt'
import { jwtSecret } from '../utils/constants'
import { Request, Response } from "express";

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService) {
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

    async signin(dto: AuthDto, req: Request, res: Response) {
        const {email, password} = dto;

        const existedUser = await this.prisma.users.findUnique({where: {email}});
        if (!existedUser) {
            throw new BadRequestException('Wrong credentials');
        }

        const isMatch = await this.isCorrectPassword({password, hash: existedUser.password_hash})
        if (!isMatch) {
            throw new BadRequestException('Wrong credentials')
        }

        const token = await this.signToken({id: existedUser.userid, email});
        if (!token) {
            throw new ForbiddenException();
        }

        res.cookie('token', token);

        return res.send({message: 'Logged in successfully'});
    }

    async signout(req: Request, res: Response) {
        res.clearCookie('token');
        return res.send({message: 'Logged out successfully'});
    }

    async hashPassword(password:string) {
        const saltOrRounds = 10;
        return await bcrypt.hash(password, saltOrRounds);
    }

    async isCorrectPassword(args: {password:string, hash:string}) {
        return await bcrypt.compare(args.password, args.hash);
    }

    async signToken(args: {id: string, email: string}) {
        return this.jwt.signAsync(args, {secret: jwtSecret});
    }
}
