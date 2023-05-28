import {ForbiddenException, Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";
import {Request} from "express";

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {
    }

    async getMyUser(id: string, req: Request) {
        const decodedUserInfo = req.user as { id: string; email: string };

        const foundUser = await this.prisma.users.findUnique({where: {userid: id}});
        if (!foundUser) {
            throw new NotFoundException();
        }
        console.log(decodedUserInfo)
        if (foundUser.userid !== decodedUserInfo.id) {
            throw new ForbiddenException();
        }

        delete foundUser.password_hash;

        return { user: foundUser };
    }

    async getUsers() {
        return await this.prisma.users.findMany({select: {userid: true, email: true}});
    }

}
