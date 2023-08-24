import React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export function CloseButton({buttonAction}) {
    return (
        <IconButton
            onClick={buttonAction}
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.text.secondary
            }}
        >
            <CloseIcon/>
        </IconButton>
    );
}