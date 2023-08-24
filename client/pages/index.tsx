import React from "react";
import Screen from "../src/components/layout/Screen";
import { Main } from "../src/content/Home/Main";
import { backendService } from "../service/backend";
import { ReturnProduct } from "../models/product";

export async function getStaticProps() {
    const products = await backendService.getProducts();
    return {
        props: {
            products,
        },
    };
}
export default function Index({ products }: {products: ReturnProduct[]}) {

    return (
        <Screen>
            <Main products={products}/>
        </Screen>
    );
}
