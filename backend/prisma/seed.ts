// import { PrismaClient } from '@prisma/client';
import { dummyProducts } from './products';
import { ProductService } from '../src/product/product.service';
import { SphereService } from '../src/sphere/sphere.service';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

// const client = new PrismaClient();

const main = async () => {
    const sphereService = new SphereService();
    const productService = new ProductService(sphereService);

    // Create products
    await Promise.all(dummyProducts.map((p) => productService.create(p)));
};

main();
