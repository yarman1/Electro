import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";
import {AdvertsDto} from "./dto/adverts.dto";
import {Request} from "express";
import {SpecsArrayDto} from "./dto/specifications.dto";

@Injectable()
export class AdvertsService {
    constructor(private prisma: PrismaService) {
    }

    async postNewAdvertisement(dto:AdvertsDto, req:Request) {
        const {category_id, title, description, price, address} = dto;

        const decodedUserInfo = req.user as { id: string; email: string };

        await this.prisma.advertisements.create({
            data: {
                seller_id: decodedUserInfo.id,
                category_id,
                title,
                description,
                price,
                address,
            }
        })

        return {
            message: 'New advertisement has been created'
        };
    }

    async getCategories() {
        return await this.getConstants('categories');
    }

    async getSpecifications(id) {
        return await this.prisma.specifications.findMany({where: {category_id: parseInt(id)}});
    }

    async postSpecifications(dto:SpecsArrayDto) {
        // @ts-ignore
        await this.prisma.advertisement_specs.createMany({data: [...dto.specsArray]});
        return {message: 'Specs created successfully'}
    }

    async getConstants(name: string) {
        return await this.prisma[name].findMany();
    }
}
