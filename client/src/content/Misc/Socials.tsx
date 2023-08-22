import React from "react";
import Profile from "@public/icons/profile.svg";
import Cart from "@public/icons/cart.svg";
import palette from "../../styles/palette.module.scss";

type Social = {
    title: string;
    link: string;
    path: string;
    element: (scale: number, color?: string) => React.ReactNode;
};

export const CART = {
    title: "Cart",
    link: "/cart",
    path: "",
    element: (scale = 1, color = palette.baseYellow) => (
        <Cart color={color} style={{ height: 29 * scale, width: 29 * scale }} />
    ),
};

export const PROFILE = {
    title: "Twitter",
    link: "/profile",
    path: "/icons/twitter.svg",
    element: (scale = 1, color = palette.baseYellow) => (
        <Profile color={color} style={{ height: 32 * scale, width: 32 * scale }} />
    ),
};

export const HeaderItems: Social[] = [CART, PROFILE];
