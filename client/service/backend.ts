import { ReturnProduct } from "../models/product";
import axios from "axios";
import { LineItem } from "../src/content/Cart/Cart";

export class Backend {
    endpoint: string;

    constructor() {
        if (process.env.BACKEND_ENDPOINT === undefined) throw new Error('BACKEND_ENDPOINT is undefined');

        this.endpoint = process.env.BACKEND_ENDPOINT;
    }

    async getProducts(): Promise<ReturnProduct[]> {
        const response = await fetch(`${this.endpoint}/product/get`);
        const data = await response.json();
        return data;
    }

    async createPayment(lineItems: LineItem[]) {
        const response = await axios.post(
            `${this.endpoint}/sphere/payment/create`,
            { lineItems: lineItems},
            {headers: {
                'Content-Type': 'application/json'
            }}
        );
        return response.data;
    }

}

export const backendService = new Backend();