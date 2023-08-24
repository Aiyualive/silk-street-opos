import React from "react";
import useCartStore, { CartItem } from "../../providers/CartStore";
import { Text } from "../../components/Text/TextComponent";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from "@mui/material";
import style from "@styles/style.module.scss";
import Image from "next/image";
import { CartQuantity } from "./CartQuantity";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    cartItem: CartItem;
    index: number
}

export function CartRow({cartItem, index, ...props}: Props) {
    const {product, quantity} = cartItem;
    const deleteProduct = useCartStore(state => state.deleteProduct);

    return (
        <div
            {...props}
            className={"flex flex-row justify-between items-center"}
        >
            {/*Left*/}
            <div className={"flex flex-row items-center gap-x-2 "}>
                <Image
                    style={{ borderRadius: style.borderRadiusMd }}
                    width={100}
                    height={100}
                    src={product.images?.[0] ?? "https://via.placeholder.com/250"}
                    alt={product.name + ".img"}
                />
                <Text.Body1 fontVariant={"bold"} color={"text.secondary"}>{product?.name} | {product?.description}</Text.Body1>
            </div>

            {/* Right */}
            <div className={"flex flex-row items-center gap-x-8"}>
                <CartQuantity quantity={quantity}/>
                <Text.Body1 fontVariant={"bold"} color={"text.secondary"}>
                    ${product.prices?.[0] === undefined ? 0 : (product.prices?.[0].unitAmountDecimal * quantity)}
                </Text.Body1>
                <IconButton onClick={() => deleteProduct(product.id)}>
                    <DeleteOutlineIcon/>
                </IconButton>
            </div>
        </div>
    );
}