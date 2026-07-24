import {type SubmitHandler, useForm} from "react-hook-form"
import {Box, Typography} from "@mui/material";
import {LOGIN_FIELDS_DATA, QUERY_KEYS, ROUTES_PATHS_DATA} from "../../constants";
import Input from "../ui/Input.tsx";
import Button from "../ui/Button.tsx";
import {useNavigate} from "react-router-dom";
import {loginSchema} from "../../validation";
import {zodResolver} from '@hookform/resolvers/zod'
import useLogin from "../../hooks/auth/useLogin.ts";
import toast from "react-hot-toast";
import {buttonTheme, formContainerStyle} from "../../styles/styles.ts";
import type {LoginSchema} from "../../types";
import useAccountDeactivatedHandler from "../../hooks/handlers/useAccountDeactivatedHandler.ts";
import LoginWithGoogle from "./LoginWithGoogle.tsx";
import useInvalidateQueries from "../../hooks/handlers/useInvalidateQueries.ts";
import RecoverAccount from "./RecoverAccount.tsx";


const LoginForm = () => {
  /* ** HOOKS ** */
  const {handleAccountDeactivatedError} = useAccountDeactivatedHandler()
  const {invalidateQueries} = useInvalidateQueries()
  const {mutateAsync, isPending} = useLogin()
  const navigate = useNavigate()
  const {register, handleSubmit, formState: {errors}} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange'
  })
  /* ** HANDLER ** */
  // On Submit Handler
  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    try {
      await mutateAsync(data);
      toast.success("Logged in successfully");
      await invalidateQueries(QUERY_KEYS.currentUser, QUERY_KEYS.globalProperties)
      navigate(ROUTES_PATHS_DATA.home)
    } catch (error) {
      handleAccountDeactivatedError(error)
    }
  }
  return (
    <Box sx={formContainerStyle}>
      <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
        {
          LOGIN_FIELDS_DATA.map(({type, id, name, placeholder, label}, index) => {
            return <Box sx={{width: '100%', mb: '15px'}} key={index}>
              <Typography component={'label'} htmlFor={id}
                          sx={{fontSize: '14px', color: '#1A1A1A', mb: '5px', display: 'block'}}>{label}</Typography>
              <Input type={type} placeholder={placeholder} variant={'outlined'} id={id}
                     {...register(name)}
                     error={!!errors[name]}
                     helperText={errors[name]?.message}/>
            </Box>
          })
        }

        <Button type={'submit'} sx={buttonTheme} isLoading={isPending}>
          Continue with email
        </Button>
      </Box>
      {/*LOGIN WITH GOOGLE*/}
      <LoginWithGoogle/>
      <RecoverAccount/>
    </Box>
  );
};

export default LoginForm;