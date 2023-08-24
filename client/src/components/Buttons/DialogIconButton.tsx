import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { CustomDialogProps, DialogContentProps } from "../Dialogs/CustomDialog";

interface DialogIconButtonProps<T extends DialogContentProps> {
    dialogContent: T["dialogContent"],
    Dialog: React.ComponentType<T>,
    icon: React.ReactNode
}

export function DialogIconButton({icon, Dialog, dialogContent}: DialogIconButtonProps<CustomDialogProps>) {
    const [visible, setVisible] = useState(false);

    const handleOnClick = () => {
        setVisible(prevState => !prevState);
    };

    return (<>
        <IconButton
            onClick={handleOnClick}
        >
            {icon}
        </IconButton>

        {/*{visible && <Dialog dialogContent={dialogContent} onClose={() => setVisible(false)} open={visible}/>}*/}
        <Dialog dialogContent={dialogContent} onExit={() => setVisible(false)} open={visible}/>
    </>);
}

