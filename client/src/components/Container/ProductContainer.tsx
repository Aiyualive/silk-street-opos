import { StandardContainer } from "./StandardContainer";
export interface ReceiptProps {
    dataItem: any;
    i: number;
}

export function ProductContainer({ dataItem, i }: ReceiptProps) {

    return (
        <StandardContainer item={dataItem}/>
    );
}
