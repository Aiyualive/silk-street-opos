import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import style from "@styles/style.module.scss";
import palette from "@styles/palette.module.scss";

export function ProductContainer({
    children,
    ...props
}: BoxProps) {
    return (
        <Box
            {...props}
            width={"300px"}
            maxHeight={"425px"}
            component="div"
            position="relative"
            padding={"16px"}
            boxShadow={`-5px 5px ${palette.lightRed}`}
            flexDirection={"column"}
            borderRadius={style.borderRadiusMd}
            display="flex"
            textAlign="center"
            justifyContent="center"
            sx={{
                background: (theme) => theme.palette.secondary.main,
            }}
        >
            {children}
        </Box>
    );
}