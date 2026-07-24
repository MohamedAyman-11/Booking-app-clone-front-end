import {type SubmitHandler, useForm} from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'
import {Box} from "@mui/material";
import {REGISTER_FIELDS_DATA, ROUTES_PATHS_DATA} from "../../constants";
import Input from "../ui/Input.tsx";
import Button from "../ui/Button.tsx";
import {useNavigate} from "react-router-dom";
import {registerSchema} from "../../validation";
import useRegister from "../../hooks/auth/useRegister.ts";
import toast from "react-hot-toast";
import {useState} from "react";
import {buttonTheme, formContainerStyle} from "../../styles/styles.ts";
import LoginWithGoogle from "./LoginWithGoogle.tsx";
import type {RegisterSchema} from "../../types";
import useAccountDeactivatedHandler from "../../hooks/handlers/useAccountDeactivatedHandler.ts";
import Label from "../ui/Label.tsx";
import FileUploader from "../ui/FileUploader.tsx";
import RecoverAccount from "./RecoverAccount.tsx";


const RegisterForm = () => {
  /* ** HOOKS ** */
  const [file, setFile] = useState<File | null>(null)
  const {handleAccountDeactivatedError} = useAccountDeactivatedHandler()
  const {mutateAsync, isPending} = useRegister()
  const navigate = useNavigate()
  const {register, handleSubmit, formState: {errors},} = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange'
  })
  /* ** HANDLERS ** */
  // On Submit Handler
  const onSubmit: SubmitHandler<RegisterSchema> = async (data) => {
    try {
      const formData = new FormData()
      formData.append("name", data.name)
      formData.append("email", data.email)
      formData.append("password", data.password)
      if (file) formData.append('photo', file)
      await mutateAsync(formData);
      toast.success('Account created successfully')
      navigate(ROUTES_PATHS_DATA.login)
    } catch (error) {
      handleAccountDeactivatedError(error)
    }
  }
  return (
    <Box sx={formContainerStyle}>
      <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
        {
          REGISTER_FIELDS_DATA.map(({type, id, name, placeholder, label}) => {
            return <Box sx={{width: '100%', mb: '15px'}} key={id}>
              <Label id={id}>{label}</Label>
              <Input type={type}
                     placeholder={placeholder}
                     variant={'outlined'}
                     id={id}
                     {...register(name)}
                     error={!!errors[name]}
                     helperText={errors[name]?.message}
              />
            </Box>
          })
        }
        <FileUploader setFile={setFile} file={file}/>
        <Button type={'submit'} sx={buttonTheme} isLoading={isPending}>
          Continue with email
        </Button>
      </Box>
      <LoginWithGoogle/>
      <RecoverAccount/>
    </Box>
  );
};

export default RegisterForm;