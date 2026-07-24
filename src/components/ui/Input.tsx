import {IconButton, InputAdornment, TextField, type TextFieldProps} from "@mui/material";
import {useState} from "react";
import {EyeIcon, EyeOffIcon} from "lucide-react";

type IInput = TextFieldProps

const Input = ({type, slotProps, ...rest}: IInput) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const isPassword: boolean = type === "password";
  return (
    <TextField
      type={isPassword ? (showPassword ? "text" : "password") : type}
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
      slotProps={{
        ...slotProps,
        input: {
          ...slotProps?.input,
          endAdornment: isPassword ? (
            <InputAdornment position={'end'}>
              <IconButton onClick={() => setShowPassword(prev => !prev)}>
                {showPassword ? <EyeIcon size={20}/> : <EyeOffIcon size={20}/>}
              </IconButton>
            </InputAdornment>
          ) : undefined,
          style: {
            paddingRight: '5px'
          },
          autoComplete: 'off'
        }
      }}
      {...rest}
    />
  );
};

export default Input;