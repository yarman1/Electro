import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {
    }

    async getMyUser(id: string) {
        return await this.prisma.users.findUnique({where: {userid: id}})
    }

    async getUsers() {
        return await this.prisma.users.findMany({select: {userid: true, email: true}});
    }

}
