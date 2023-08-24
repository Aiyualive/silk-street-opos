import {create} from 'zustand';
import { ReturnProduct } from "../../models/product";
import { persist } from "zustand/middleware";

export interface CartItem {
    product: ReturnProduct,
    quantity: number,
}

export type CartStore = {
    cartItems: CartItem[]
    pulsate: boolean
    addProduct: (p: ReturnProduct) => void
    deleteProduct: (productId) => void
    startPulsating: (duration?: number) => void
    getTotalQuantity: () => number
    getTotalPrice: () => number
}

// Zustand with typescript
// https://stackoverflow.com/questions/69814018/zustand-typescript-persist-how-to-type-store
const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            cartItems: [],
            pulsate: false,
            startPulsating: (duration = 1000) => {
                set({ pulsate: true }); // Start pulsating animation
                const timeoutId = setTimeout(() => {
                    set({ pulsate: false }); // Stop pulsating after the specified duration
                }, duration);

                // Perform cleanup by clearing the timeout when the component unmounts or when startPulsating is called again
                return () => {
                    clearTimeout(timeoutId);
                };
            },
            deleteProduct: (productId) => {
                set((state) => ({
                    cartItems: state.cartItems.filter(item => item.product.id !== productId)
                }));
            },
            addProduct: (product) => {
                set((state) => {
                    const existingIndex = state.cartItems.findIndex(
                        (item) => item.product.id === product.id
                    );

                    if (existingIndex !== -1) {
                        const updatedCartItems = [...state.cartItems];
                        updatedCartItems[existingIndex].quantity += 1;
                        return { cartItems: updatedCartItems };
                    } else {
                        return { cartItems: [...state.cartItems, { product, quantity: 1 }] };
                    }
                });
            },
            getTotalQuantity: () => {
                const totalQuantity = get().cartItems.reduce(
                    (acc, item) => acc + item.quantity,
                    0
                );
                return totalQuantity;
            },
            getTotalPrice: () => {
                const totalPrice = get().cartItems.reduce(
                    // (acc, item) => acc + (item.product.prices[0].unitAmountDecimal) * item.quantity,
                    (acc, item) => acc + (item.product.prices?.[0] === undefined ? 0 : item.product.prices?.[0].unitAmountDecimal) * item.quantity,
                    0
                );
                return totalPrice;
            },
        }),
        { name: "cart" }
    ),
);

export default useCartStore;
