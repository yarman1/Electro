import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";
import {AdvertsDto} from "./dto/adverts.dto";
import {Request} from "express";

@Injectable()
export class AdvertsService {
    constructor(private prisma: PrismaService) {
    }

    async postNewAdvertisement(dto:AdvertsDto, req:Request) {
        const {category_id, title, description, price} = dto;

        const decodedUserInfo = req.user as { id: string; email: string };

        await this.prisma.advertisements.create({
            data: {
                seller_id: decodedUserInfo.id,
                category_id,
                title,
                description,
                price,
            }
        })

        return {
            message: 'New advertisement has been created'
        };
    }

    async findUseById(id: string) {
        return await this.prisma.users.findUnique({where: {userid: id}});
    }
}
