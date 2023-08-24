import React from "react";
import {styled} from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import style from "@styles/style.module.scss";
import { DialogProps } from "@mui/material";

const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogTitle-root': {
        padding: theme.spacing(2, 3, 1, 3),
        backgroundColor: theme.palette.secondary.main
    },
    '& .MuiDialogContent-root': {
        paddingTop: '8px !important', // for some reason the padding-0 is applied per default
        padding: theme.spacing(0, 3,1, 3), // need to account for the outline width also
        [theme.breakpoints.down('sm')]: {
            paddingTop: "0px !important",
            padding: theme.spacing(0, 3,0, 3),
        },
        backgroundColor: theme.palette.secondary.main,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
    },
    '& .MuiDialogActions-root': {
        marginLeft: "0px",
        padding: theme.spacing(1,3), // Vertical spacing between sections
        // backgroundColor: theme.palette.secondary.main,
    },
    '& .MuiPaper-root': {
        borderRadius: style.borderRadiusMd,
        margin: "0px 12px 0px 12px",
        padding: "0px 2px 0px 2px",
        height: "100%",
        maxHeight: "800px",
        maxWidth: "800px",
        width: style.mainMaxWidth,
    },
}));

export interface MyDialogProps {
    Header: React.ComponentType<{ onExit?: () => void }>
    Body: React.ComponentType
    Footer: React.ComponentType
}

export interface DialogContentProps {
    dialogContent: MyDialogProps
}
export interface CustomDialogProps extends DialogContentProps, DialogProps {
    onExit?: () => void
}

export function CustomDialog({dialogContent, onExit, open}: CustomDialogProps) {
    const {Header, Body, Footer} = dialogContent;
    return (
        <StyledDialog
            // onClose={onClose}
            open={open}
        >
            {/* HEADER */}
            <DialogTitle>
                <Header onExit={onExit}/>
            </DialogTitle>

            {/* BODY */}
            <DialogContent>
                <Body/>
            </DialogContent>

            {/* FOOTER */}
            <DialogActions>
                <Footer/>
            </DialogActions>
        </StyledDialog>
    );
}

