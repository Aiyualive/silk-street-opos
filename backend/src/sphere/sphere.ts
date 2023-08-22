import { CreateProductDto } from '../product/dto/create-product.dto';
import fetch from 'node-fetch';
import { GetProductParams } from '../product/dto/get-product-params';

// TODO: what is the type of body
// enforce http request types
const options = (apiKey: string, method: string, body): RequestInit => {
    switch (method) {
        case 'POST':
            return {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify(body),
            };
        case 'GET':
            return {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    authorization: `Bearer ${apiKey}`,
                },
            };
        default:
            throw new Error('Invalid method');
    }
};

enum SphereEndpoints {
    createProduct = 'https://api.spherepay.co/v1/product',
    getAllProducts = 'https://api.spherepay.co/v1/product?',
}

export class Sphere {
    private readonly apiKey: string;
    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async create(createProductDto: CreateProductDto) {
        try {
            const response = await fetch(
                SphereEndpoints.createProduct,
                options(this.apiKey, 'POST', createProductDto),
            );

            const data = await response.json();
        } catch (err) {
            throw new Error('Failed to create product');
        }
    }

    async listAllProducts(query: GetProductParams) {
        try {
            // Probably need some sanitization
            const queryParams = new URLSearchParams(Object(query));
            const response = await fetch(
                SphereEndpoints.getAllProducts + queryParams.toString(),
                options(this.apiKey, 'GET', []),
            );
            const { data } = await response.json();

            return data.products;
        } catch (err) {
            throw new Error('Failed to create product');
        }
    }
}
