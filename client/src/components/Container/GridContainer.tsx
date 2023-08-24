import React from "react";
import Grid, {GridProps} from "@mui/material/Grid";
import {SxProps} from "@mui/material";
import {Theme} from "@mui/material/styles";

interface GridContainerProps<T> extends GridProps {
    data: T[]
    itemsPerColumn: number
    itemsPerPage: number
    ContentComponent: (props: {
        dataItem: T,
        dataIndex?: number,
    }) => JSX.Element
    pageIndex?: number

    keyId?: string
    itemProps?: SxProps<Theme> | undefined
}

//https://stackoverflow.com/questions/63705571/rendering-material-ui-cards-dynamically-in-a-row
export function GridContainer<T>({
    keyId,
    data,
    sx,
    children,
    itemsPerColumn,
    itemsPerPage,
    pageIndex = 0,
    spacing = 2,
    itemProps,
    ContentComponent,
    ...props
}: GridContainerProps<T>) {
    return (
        <Grid
            {...props}
            container
            spacing={spacing}

            flexDirection={"row"}
        >
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
                    <ContentComponent dataItem={dataItem} dataIndex={(pageIndex - 1) * itemsPerPage + (i + 1)}/>
                </Grid>
            )}
        </Grid>
    );
}
