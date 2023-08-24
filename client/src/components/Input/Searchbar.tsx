import { useState } from "react";
import style from "@styles/style.module.scss";
import palette from "@styles/palette.module.scss";
import { InputAdornment, TextFieldProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StyledSearchInput } from "./StyledSearchInput";

export function Searchbar({placeholder = "Search product", ...props}: TextFieldProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <StyledSearchInput
            {...props}
            sx={{
                backgroundColor: "#FFDDA8",
                borderRadius: style.borderRadiusSm,
                padding: "8px 16px",
                boxShadow:`-5px 5px ${palette.lightRed}`
            }}
            autoComplete="off"
            placeholder={placeholder}
            value={searchTerm}
            onChange={handleSearchChange}
            // inputProps={{ inputMode: "numeric", pattern: "[0-9}" }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
}