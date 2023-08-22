import { Injectable } from '@nestjs/common';
import { Sphere } from './sphere';
import { CreateProductDto } from '../product/dto/create-product.dto';
import { GetProductParams } from '../product/dto/get-product-params';

@Injectable()
export class SphereService {
    readonly sphere: Sphere;
    constructor() {
        this.sphere = new Sphere(process.env.SPHERE_KEY);
    }

    async createProduct(createProductDto: CreateProductDto) {
        await this.sphere.create(createProductDto);
    }

    async listAllProducts(query: GetProductParams) {
        return await this.sphere.listAllProducts(query);
    }
}
