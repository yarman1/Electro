import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";
import {Request} from "express";

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {
    }

    async getMyUser(req: Request) {
        const decodedUserInfo = req.user as { id: string; email: string };

        const foundUser = await this.findUseById(decodedUserInfo.id);
        if (!foundUser) {
            throw new NotFoundException();
        }
        delete foundUser.password_hash;

        const adverts = await this.prisma.advertisements.findMany({where: {seller_id: decodedUserInfo.id}})
        const advertsWithSpecs = [];
        for (const advert of adverts) {
            const specifications = await this.prisma.advertisement_specs.findMany({where:{advertisement_id: advert.advertisementid}})
            advertsWithSpecs.push({
                ...advert,
                specifications,
            })
        }

        return {
            ...foundUser,
            adverts: advertsWithSpecs,
        };
    }

    async getUser(id: string) {
        const foundUser = await this.findUseById(id);
        if (!foundUser) {
            throw new NotFoundException();
        }
        delete foundUser.password_hash;
        return foundUser;
    }

    async findUseById(id: string) {
        return await this.prisma.users.findUnique({where: {userid: id}});
    }

    async getUsers() {
        return await this.prisma.users.findMany({select: {userid: true, email: true, visual_name: true}});
    }

}
