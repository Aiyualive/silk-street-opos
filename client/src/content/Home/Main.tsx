import React from "react";
import { Searchbar } from "../../components/Input/Searchbar";
import { ReturnProduct } from "../../../models/product";
import { Products } from "./Products";

interface Props {
    products: ReturnProduct[];
}
export function Main({products}: Props) {
    return (
        <div className="flex flex-col w-full gap-y-4 pt-6 px-6">
            <Searchbar/>
            <Products products={products}/>
        </div>
    );
}
