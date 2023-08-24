import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledSearchInput = styled(TextField)(({theme }) => ({
    '& .MuiTextField-root': {
        display: 'contents',
    },
    '& .MuiInputBase-input': {
        padding: '0px',
        maxWidth: "unset",
        color: theme.palette.text.secondary,
        fontWeight: "900",
        textAlign: "left",
        fontSize: "14px"
    },
    '& .MuiOutlinedInput-root': {
        backgroundColor: "transparent",
        borderWidth: '0px',
        // height: "px",
        paddingRight: "0px",
    },
    // could also do at the textfield
    // sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none"
    }
}));
