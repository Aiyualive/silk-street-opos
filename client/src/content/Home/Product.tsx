import Image from "next/image";
import style from "../../styles/style.module.scss";
import { Text } from "../../components/Text/TextComponent";
import Button from "@mui/material/Button";
import React from "react";
import { ReturnProduct } from "../../../models/product";
import useCartStore from "../../providers/CartStore";
import { ProductContainer } from "../../components/Container/ProductContainer";

interface Props {
    dataItem: ReturnProduct,
}
export function Product({dataItem}: Props) {
    //  maybe should use getState instead
    // getState is for static?
    // useStore is for dynamic?
    const addProduct = useCartStore(state => state.addProduct);
    const startPulsating = useCartStore(state => state.startPulsating);

    const handleAddProduct = (e) => {
        e.stopPropagation();
        addProduct(dataItem);
        startPulsating();
    };

    return (
        <ProductContainer>
            <div className={"flex justify-center py-2"}>
                <Image
                    style={{ borderRadius: style.borderRadiusMd }}
                    width={250}
                    height={250}
                    src={dataItem.images?.[0] ?? "https://via.placeholder.com/250"}
                    alt={dataItem.name + ".img"}
                />
            </div>

            <div className={"flex flex-col gap-y-2  mx-2 text-left" }>
                {/* Description */}
                <div className="h-[40px]">
                    <Text.Body1 fontVariant={"bold"} color={"text.secondary"}>{dataItem.name} | {dataItem.description}</Text.Body1>
                </div>

                {/* Footer */}
                <div className="flex flex-row h-[40px] justify-between items-center" >
                    <Text.Subtitle1 fontVariant={"second"} color={"text.secondary"}>
                        {/* @ts-ingore */}
                        { dataItem.prices?.[0] === undefined ? "$6.9" : `$${dataItem.prices?.[0].unitAmountDecimal}` }
                    </Text.Subtitle1>

                    <Button
                        variant={"contained"}
                        sx={{width: 100}}
                        onClick={handleAddProduct}
                    >
                        add
                    </Button>
                </div>
            </div>
        </ProductContainer>
    );
}