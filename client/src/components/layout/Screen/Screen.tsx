import React from "react";
import {Header} from "../Header";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { AppleWrapper } from "../../Container/AppleWrapper";

const Base = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#160C18"
}));

const Body = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // position: "relative"
    // overflow: "hidden"
}));

interface ScreenProps {
    children: React.ReactNode;
    headerPosition?: string;
    admins?: string[];
}

export const Screen = ({ children, headerPosition = "static" }: ScreenProps) => {
    return (
        <Base>
            <Header headerPosition={headerPosition} />
            
            <Body>
                <AppleWrapper webComponent={children} />
            </Body>
        </Base>
    );
};

export default Screen;
