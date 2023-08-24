import React from "react";
import {IconButton} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import { Text } from "../../Text/TextComponent";
import { TextBackground } from "../../Text/Typography";
import { CartButton } from "../../../content/Cart/CartButton";

export function HeaderLogo(){
    const AR = 168/120;
    return (
        <Link href="/" style={{display: "flex", alignItems: "center"}}>
            <Image
                src={"/logos/newLogo.png"}
                alt="Home"
                width={AR*30}
                height={30}
                priority={true}
            />
            <Text.H5
                textBackground={TextBackground.none}
                paddingLeft={"8px"}
                display={{ xs: "none", md: "none", lg: "flex", xl: "flex" }}
            >
                Silk Street
            </Text.H5>
        </Link>
    );
}

export function HeaderBurgerMenu({openMenuStateFun, mobile = false}) {
    return (
        <IconButton onClick={openMenuStateFun}>
            <Image
                src={mobile ? "/icons/hamburgerEaten.png" : "/icons/hamburger.png"}
                alt="burgerMenu"
                width={46}
                height={46}
                priority={true}
            />
        </IconButton>
    );
}

export function HeaderButtons({color = "#FFDDA8", scale = 1}: {color?: string, scale?: number }) {
    return (
        <Box
            component="div"
            className="flex gap-x-2 items-center"
        >
            <CartButton/>
        </Box>
    );
}


