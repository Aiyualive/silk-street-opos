// Main inspiration: https://www.youtube.com/watch?v=9paBIA2R5C0
import React, {useState} from "react";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import {MobileOverlay} from "./MobileOverlay";
import {HeaderBurgerMenu, HeaderLogo, HeaderButtons,} from "./HeaderSections";
import {useRouter} from "next/router";

export function StandardHeader({useMiddleButton = true}: {useMiddleButton?: boolean}) {
    return (
        <>
            {/* Left */}
            <Box
                component="div"
                columnGap="12px"
                marginLeft={"20px"}
                display={{ xs: "none", md: "flex" }}
            >

            </Box>

            {/* Right */}
            <Box
                component="div"
                display="flex"
                justifyContent={"flex-end"}
                flexGrow={1}
            >
                <Box component="div"
                    display={{ xs: "none", sm: "none", md: "flex", lg: "flex" }}
                    sx={{marginRight: "16px"}}
                >
                    {/*<DropdownMenu title="Menu" dropdownItems={infoSections} />*/}
                    <HeaderButtons />
                </Box>
            </Box>
        </>
    );
}


export function Header({ headerPosition }) {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const router = useRouter();

    let headerComponent;
    // make into a type
    if (router.asPath === "/receipts") {
        headerComponent = <StandardHeader useMiddleButton={false} />;
    } else {
        headerComponent = <StandardHeader/>;
    }

    return (
        <>
            <AppBar color={"transparent"} sx={{ boxShadow: "unset", zIndex: 10 }} position={headerPosition}>
                <Container className="!max-w-none !mx-0">
                    <Toolbar
                        disableGutters
                        sx={{
                            marginY: "8px",
                            display: "flex",
                            justifyContent: "space-between",
                            paddingRight: "0px"
                        }}
                    >
                        {/* Either show Logo or hamburger*/}
                        <Box component="div" display={{ xs: "none", md: "flex"}}>
                            <HeaderLogo />
                        </Box>

                        <Box component="div" display={{ xs: "flex", md: "none" }}>
                            <HeaderBurgerMenu openMenuStateFun={() => setOpenMenu(true)} />
                        </Box>

                        {/* Header content */}
                        {headerComponent}
                    </Toolbar>
                </Container>
            </AppBar>

            { openMenu && <MobileOverlay setOpenMenu={setOpenMenu}/>}
        </>
    );
}