import useCartStore from "../../providers/CartStore";
import React from "react";
import { CartFooter } from "./CartFooter";
import { MyDialogProps } from "../../components/Dialogs/CustomDialog";
import { MemoCustomDialogHeader } from "./CartHeader";
import { CartRow } from "./CartRow";
import Image from "next/image";
import style from "@styles/style.module.scss";
import { Text } from "../../components/Text/TextComponent";
import { CartQuantity } from "./CartQuantity";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

// Using memo will only re-render other components if the first item was deleted
const MemoCartRow = React.memo(CartRow);

function CartDialogBody() {
    const cartItems = useCartStore(state => state.cartItems);

    return (<div className={"flex flex-col gap-y-2"}>
        {/*TODO: Make a custom cartrow component*/}
        <div className={"flex flex-row justify-between items-center ml-4 mr-16"}>
            {/*Left*/}
            <div className={"flex flex-row items-center gap-x-2 "}>
                <Text.Subtitle1 fontVariant={"bold"} color={"text.secondary"}>
                    Product
                </Text.Subtitle1>
            </div>

            {/* Right */}
            <div className={"flex flex-row items-center gap-x-8"}>
                <Text.Subtitle1 fontVariant={"bold"} color={"text.secondary"}>
                    Quantity
                </Text.Subtitle1>
                <Text.Subtitle1 fontVariant={"bold"} color={"text.secondary"}>
                    Price
                </Text.Subtitle1>
            </div>
        </div>

        {cartItems && cartItems.map((cartItem, index) =>
            <MemoCartRow
                cartItem={cartItem}
                key={"CartRow" + index}
                index={index}
            />
        )}
    </div>);
}

export function cartDialogContent(): MyDialogProps {
    return {
        Header: MemoCustomDialogHeader,
        Body: CartDialogBody,
        Footer: CartFooter,
    };
}