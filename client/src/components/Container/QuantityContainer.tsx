import style from "@styles/style.module.scss";
import React from "react";
import Box, { BoxProps } from "@mui/material/Box";

export function QuantityContainer({children}: BoxProps) {
    return (
        <Box
            component={"div"}
            className={"flex flex-row bg-black items-center justify-center gap-x-1"}
            sx={{
                borderRadius: style.borderRadiusSm,
                backgroundColor: (theme) => theme.palette.text.secondary,
                width: "80px",
                height: "30px"
            }}
        >
            {children}
        </Box>
    );
}