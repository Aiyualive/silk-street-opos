import React from "react";
import Box from "@mui/material/Box";
// import {Header5, Header6Bas} from "../Text";
import Image from "next/image";
const defaultWidth = "100%";


export const SingleDivider = ({width=defaultWidth, ...props}) => {
    return (
        <Box
            component="div"
            className={`self-center borderDividerStyle`}
            {...props}
        />
    );
};

