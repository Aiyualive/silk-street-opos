import Cart from "@public/icons/cart.svg";
import { CustomDialog } from "../../components/Dialogs/CustomDialog";
import React from "react";
import { DialogIconButton } from "../../components/Buttons/DialogIconButton";
import { cartDialogContent } from "./CartDialogContent";
import useCartStore from "../../providers/CartStore";
import { PulseComponent } from "../../components/Animations/Pulse";

export function CartButton() {
    const pulsate = useCartStore((state) => state.pulsate);
    return (
        <DialogIconButton
            icon={<>
                {pulsate && <PulseComponent /> }
                <Cart style={{ height: 29 , width: 29}} />
            </>}
            Dialog={CustomDialog}
            dialogContent={cartDialogContent()}
        />
    );
}