import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import palette from "@styles/palette.module.scss";

export function StandardDivider({...props}: BoxProps) {
    return (
        <Box
            component="div"
            className={`self-center ${props.className}`}
            borderTop={`1px solid ${palette.contrastBlack}`}
            width={"100%"}
            {...props}
        />
    );
}

