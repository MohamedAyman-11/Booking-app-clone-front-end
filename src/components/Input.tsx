import {TextField, type TextFieldProps} from "@mui/material";

type IInput = TextFieldProps

const Input = ({...rest}: IInput) => {
  return (
    <TextField
      sx={{
        width: "100%",

        "& .MuiOutlinedInput-input": {
          py: "10px",
        },

        "& .MuiInputBase-input::placeholder": {
          color: "#1A1A1A",
          opacity: 0.7,
          fontWeight: 400,
          fontSize: "14px",
        },

        "& .MuiOutlinedInput-root:hover fieldset": {
          borderColor: "#D9D9D9",
        },

        "& .MuiOutlinedInput-root.Mui-focused fieldset": {
          borderColor: "#1976d2",
        },

        "& .MuiOutlinedInput-root.Mui-error:hover fieldset": {
          borderColor: (theme) => theme.palette.error.main,
        },
        "& .MuiOutlinedInput-root.Mui-error.Mui-focused fieldset": {
          borderColor: (theme) => theme.palette.error.main,
        },

        "& .MuiFormHelperText-root": {
          ml: 0,
        },
      }}
      {...rest}
    />
  );
};

export default Input;