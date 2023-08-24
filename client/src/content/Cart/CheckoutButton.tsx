import Button from "@mui/material/Button";
import React from "react";
import { CartItem } from "../../providers/CartStore";
import { generateLineItems } from "./Cart";
import axios from "axios";

export function CheckoutButton({totalQuantity, cartItems}: {totalQuantity: number, cartItems: CartItem[]}){
    async function handleCheckout() {
        const lineItems = generateLineItems(cartItems);
        // Probably better to send it directly to the backend
        const { data } = await axios.post("/api/createPayment", { data: lineItems });
        const paymentLink = data.message.paymentLink.url;
        window.open(paymentLink, '_blank');
    }

    return (
        <Button
            variant={"contained"}
            sx={{width: 200}}
            disabled={totalQuantity === 0}
            onClick={handleCheckout}
        >
            Checkout
        </Button>
    );
}