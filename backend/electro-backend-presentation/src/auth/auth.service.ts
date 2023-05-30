import {BadRequestException, ForbiddenException, Injectable} from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";
import {AuthDto} from "./dto/auth.dto";
import * as bcrypt from "bcrypt";
import { JwtService} from '@nestjs/jwt'
import { jwtSecret } from '../utils/constants'
import { Request, Response } from "express";
import {AuthDtoSignUp} from "./dto/auth.signup.dto";

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService) {
    }

    async signup(dto:AuthDtoSignUp) {
        const {email, password, visual_name} = dto;

        const existedUser = await this.prisma.users.findUnique({where: {email}});
        if (existedUser) {
            throw new BadRequestException('Email is already used');
        }

        const hashedPassword = await this.hashPassword(password);

        await this.prisma.users.create({
            data: {
                email,
                password_hash: hashedPassword,
                visual_name,
            }
        })

        return {
            message: 'Sign up was successful',
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

        res.cookie('token', token, {
            sameSite: "none",
            secure: true,
            httpOnly: true,
            path: '/'
        });

        return res.header('access-control-expose-headers','Set-Cookie').send({message: 'Logged in successfully'});
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
