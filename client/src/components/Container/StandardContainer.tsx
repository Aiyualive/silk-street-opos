import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import style from "../../styles/style.module.scss";
import palette from "../../styles/palette.module.scss";
import { Text } from "../Text/TextComponent";
import Image from "next/image";
import Button from "@mui/material/Button";

interface StandardContainerProps extends BoxProps {
    width?: string,
    height?: string
    maxWidth?: string | {}
    maxHeight?: string | {},
    useBgImage?: boolean,
    useHeaderLines?: boolean
    title?: string,
    item: any
}

export function StandardContainer({
    width = "100%",
    height = "100%",
    maxWidth = "300px",
    maxHeight = "425px",
    useBgImage = false,
    flexDirection = "column",
    title = "",
    useHeaderLines = true,
    item,
    ...props
}: StandardContainerProps) {
    return (
        <Box
            {...props}
            component="div"
            position="relative"
            padding={"16px"}
            boxShadow={`-5px 5px ${palette.lightRed}`}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
            width={width}
            height={height}
            borderRadius={style.borderRadiusMd}
            display="flex"
            textAlign="center"
            justifyContent="center"
            flexDirection={flexDirection}
            sx={{
                background: (theme) => theme.palette.secondary.main,
            }}
        >
            {/* Image */}
            <div className={"flex justify-center "}>
                <Image
                    style={{
                        borderRadius: style.borderRadiusMd,
                        marginTop: "8px",
                        marginBottom: "8px"
                    }}
                    width={250}
                    height={250}
                    src={item.images?.[0] ?? "https://via.placeholder.com/250"}
                    alt={item.name + ".img"}
                />
            </div>

            {/* Description */}
            <div className={"flex flex-col gap-y-2  mx-2 text-left" }>
                <div className="h-[40px]">
                    <Text.Body1 fontVariant={"bold"} color={"text.secondary"}>{item.name} | {item.description}</Text.Body1>
                </div>

                {/* Footer */}
                <div className="flex flex-row h-[40px] justify-between items-center" >
                    <Text.Subtitle1 fontVariant={"second"} color={"text.secondary"}>{ item.prices?.[0] === undefined ? "$6.9" : `$${item.prices?.[0].unitAmountDecimal}` }</Text.Subtitle1>

                    <Button variant={"contained"} sx={{width: 100}}>
                    add
                    </Button>
                </div>
            </div>
        </Box>
    );
}