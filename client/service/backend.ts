export class Backend {
    endpoint: string;

    constructor() {
        if (process.env.BACKEND_ENDPOINT === undefined) throw new Error('BACKEND_ENDPOINT is undefined');

        this.endpoint = process.env.BACKEND_ENDPOINT;
    }

    async getProducts() {
        const response = await fetch(`${this.endpoint}/product/get`);
        const data = await response.json();
        return data;
    }

}

export const backendService = new Backend();