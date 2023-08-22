import React from "react";
import Screen from "../src/components/layout/Screen";
import { useRouter } from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import style from "../src/styles/style.module.scss";
import { Text } from "../src/components/Text/TextComponent";

export default function PageNotFound() {
    const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));
    let height;
    if (isMobile) {
        height = style.mobileViewportHeight;
    } else {
        height = style.viewportHeight;
    }
    const router = useRouter();

    return (
        <Screen>
            <div style={{ height: height }} className="w-screen flex items-center justify-center">
                <Text.H6
                    sx={{ textAlign: "center", marginX: "16px" }}
                >
                    Oops! Not yet implemented: <i>{router.asPath}</i>
                </Text.H6>
            </div>
        </Screen>
    );
}
