import React from "react";
import {CloseButton} from "../../components/Buttons/CloseButton";
import { TitleDivider } from "../../components/Dividers/TitleDivider";
import { Text } from "../../components/Text/TextComponent";
import { TextBackground } from "../../components/Text/Typography";
import NormalLogo from "@public/logos/newLogo.svg";
import { ModalProps } from "@mui/material/Modal";

const CartHeader = ({onExit}: {onExit?: () => void})  => {
    return (<>
        <div className='flex flex-col items-center gap-y-2'>
            <NormalLogo style={{color:"black"}}/>

            <TitleDivider>
                <Text.H4 color={"text.secondary"} textBackground={TextBackground.none}>Cart</Text.H4>
            </TitleDivider>
        </div>


        <CloseButton buttonAction={onExit}/>
    </>);
};

export const MemoCustomDialogHeader = React.memo(CartHeader);