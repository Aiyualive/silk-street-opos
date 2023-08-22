import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { infoSectionsType } from "../layout/Header/InfoSections";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import style from "../../styles/palette.module.scss";
import { SingleDivider } from "../Dividers";
import { Text } from "../../components/Text/TextComponent";

interface DropdownMenuProps {
    title: string;
    dropdownItems: infoSectionsType[];
}

export default function DropdownMenu({ title, dropdownItems }: DropdownMenuProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                // onMouseOver={handleClick}
            >
                <Text.Subtitle1 color={"text.primary"}>{title}</Text.Subtitle1>
                <ArrowDropDownIcon sx={{ transform: open ? "rotateX(180deg)" : "unset", color: style.contrastBlack }} />
            </Button>

            <Menu
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                disableAutoFocusItem
                MenuListProps={{ "aria-labelledby": "basic-button", style: { paddingTop: 0, paddingBottom: 0 } }}
                sx={{
                    "& .MuiMenu-paper": { borderRadius: "8px" },
                    "& .MuiMenuItem-root": { paddingY: "8px" },
                }}
            >
                {dropdownItems.map(({ title, path }, i) => (
                    <div key={"dropdownMenu" + title + i}>
                        <Link href={path} key={"linkMenu" + title}>
                            <MenuItem onClick={handleClose}>
                                <Text.Body1 color={"text.secondary"}>{title}</Text.Body1>
                            </MenuItem>
                        </Link>
                        {i + 1 !== dropdownItems.length && <SingleDivider />}
                    </div>
                ))}
            </Menu>
        </>
    );
}
