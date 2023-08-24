import { GridContainer } from "../../components/Container/GridContainer";
import React from "react";
import { ReturnProduct } from "../../../models/product";
import { Product } from "./Product";

interface Props {
    products: ReturnProduct[];
}
export function Products({products}: Props) {
    return <GridContainer
        keyId={"Products"}
        ContentComponent={Product}
        data={products}
        itemsPerColumn={4}
        itemsPerPage={8}
        pageIndex={0}
        spacing={0}
        itemProps={{
            marginTop: "16px",
        }}
    />;
}
