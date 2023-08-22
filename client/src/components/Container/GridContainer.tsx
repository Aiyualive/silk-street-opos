import React from "react";
import Grid, {GridProps} from "@mui/material/Grid";
import {SxProps} from "@mui/material";
import {Theme} from "@mui/material/styles";

interface GridContainerProps<T> extends GridProps {
    data: T[]
    itemsPerColumn: number
    ContentComponent: (props: {dataItem: T, i: number, state?: any}) => JSX.Element
    pageIndex?: number
    itemsPerPage?: number
    keyId?: string
    itemProps?: SxProps<Theme> | undefined
}


//https://stackoverflow.com/questions/63705571/rendering-material-ui-cards-dynamically-in-a-row
export function GridContainer<T>({
    keyId,
    data,
    sx,
    itemsPerColumn,
    pageIndex = 0,
    itemsPerPage = 0,
    spacing = 2,
    justifyContent="",
    itemProps,
    ContentComponent,
    paddingX={xs: "8px", md: "16px", lg: "24px"},
    ...props
}: GridContainerProps<T>) {

    return (
        <Grid
            {...props}
            container
            spacing={spacing}
            flexDirection={"row"}
            justifyContent={justifyContent}
            paddingX={paddingX}
        >
            {/* Conditional length is necessary in order to not get error about unique key*/}
            {/* 6, 4, 2, these define the number of view items per breakpoint */}
            {data.map((dataItem, i ) =>
                <Grid
                    item
                    sx={itemProps}
                    key={`${keyId}${i}`}
                    xl={ 12/itemsPerColumn }
                    md={ 2*12/itemsPerColumn }
                    xs={ 3*12/itemsPerColumn }
                >
                    <ContentComponent dataItem={dataItem} i={(pageIndex - 1) * itemsPerPage + (i + 1)}/>
                </Grid>
            )}
        </Grid>
    );
}
