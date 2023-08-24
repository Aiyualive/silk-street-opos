import React from "react";
import { Text } from "../../components/Text/TextComponent";
import Button from "@mui/material/Button";
import { StandardDivider } from "../../components/Dividers/StandardDivider";
import useCartStore from "../../providers/CartStore";
import { generateLineItems } from "./Cart";
import { CheckoutButton } from "./CheckoutButton";

export function CartFooter() {
    const cartItems = useCartStore(state => state.cartItems);
    const { getTotalQuantity, getTotalPrice } = useCartStore();



    const totalQuantity = getTotalQuantity();
    return (<div className="w-full flex flex-col items-end">
        <StandardDivider/>
        <div className="flex flex-col gap-y-4 py-2 w-[200px] items-center">
            <div className={"flex flex-row justify-between gap-x-12"}>
                <div className={"flex flex-col items-center"}>
                    <Text.Subtitle1 fontVariant={"second"} color={"text.secondary"}>
                        Items
                    </Text.Subtitle1>
                    <Text.Subtitle1 fontVariant={"second"} color={"text.secondary"}>
                        {getTotalQuantity()}
                    </Text.Subtitle1>
                </div>
                <div className={"flex flex-col items-center"}>
                    <Text.Subtitle1 fontVariant={"second"}  color={"text.secondary"}>
                        Total
                    </Text.Subtitle1>
                    <Text.Subtitle1 fontVariant={"second"}  color={"text.secondary"}>
                        ${getTotalPrice()}
                    </Text.Subtitle1>
                </div>
            </div>

            <CheckoutButton totalQuantity={totalQuantity} cartItems={cartItems}/>
        </div>
    </div>);
}