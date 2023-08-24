import React from "react";
import { IconButton } from "@mui/material";
import { Text } from "../../components/Text/TextComponent";

import { QuantityContainer } from "../../components/Container/QuantityContainer";
export function CartQuantity({quantity}: {quantity: number}) {
    const ticketCount = quantity;

    return (
        <QuantityContainer>
            {/* Minus */}
            <IconButton
                disabled={true}
            >
                <Text.Body1
                    className={"flex justify-center items-center"}
                    width={"10px"}
                    height={"10px"}
                    color={"text.primary"}
                >
                -
                </Text.Body1>
            </IconButton>

            {/* Quantity */}
            <Text.Subtitle1 fontVariant={"second"}>
                {ticketCount}
            </Text.Subtitle1>

            {/* Add */}
            <IconButton
            // onClick={add}
            //     disabled={ticketCount >= 10}
                disabled={true}
            >
                <Text.Body1
                    className={"flex justify-center items-center"}
                    width={"10px"}
                    height={"10px"}
                    color={"text.primary"}
                >
                    +
                </Text.Body1>
            </IconButton>
        </QuantityContainer>
    );
}