import React from "react";
import Screen from "../src/components/layout/Screen";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Main } from "../src/content/Home/Main";
import { backendService } from "../service/backend";

export async function getStaticProps() {
    const products = await backendService.getProducts();
    return {
        props: {
            products,
        },
    };
}
// TODO Add types
export default function Index({ products }) {
    const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));

    return (
        <Screen headerPosition={isMobile ? "static" : "relative"}>
            <Main products={products}/>
        </Screen>
    );
}
