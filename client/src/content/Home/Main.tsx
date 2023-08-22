import React from "react";
import { GridContainer } from "../../components/Container/GridContainer";
import { ProductContainer } from "../../components/Container/ProductContainer";

export function Main({products}) {
    return (
        <div className="flex flex-row justify-center w-[95%] gap-x-8 pt-6">
            <div className="mt-0 sm:mt-5 w-full">
                {/* TICKETS */}
                <GridContainer
                    keyId={"MainPage"}
                    ContentComponent={ProductContainer}
                    data={products}
                    itemsPerColumn={8}
                    itemsPerPage={2}
                    paddingX={0}
                    pageIndex={0}
                    spacing={0} // changes the padding
                    itemProps={{
                        marginLeft: "16px",
                        marginTop: "16px",
                    }}
                />

                {/* PAGINATION */}
                {/*<div className="centerContainer flex pt-8">*/}
                {/*    <Pagination count={Math.ceil(receipts.length / itemsPerPage)} page={page} onChange={handlePageChange} />*/}
                {/*</div>*/}
            </div>
        </div>
    );
}
