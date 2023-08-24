import { CartItem } from "../../providers/CartStore";

export interface LineItem {
    price: string;
    quantity: number;
    quantityMutable: boolean;
}

export function generateLineItems(cartItems: CartItem[]) {
    return cartItems.reduce((lineItems: LineItem[], { product, quantity }) => {
        if (product.prices?.[0]?.id !== undefined) {
            lineItems.push({
                price: product.prices?.[0].id,
                quantity: quantity,
                quantityMutable: false
            });
        }
        return lineItems;
    }, []);
}