import {Box} from "@mui/material";
import Input from "../ui/Input.tsx";
import Button from "../ui/Button.tsx";
import {type SubmitHandler, useForm} from "react-hook-form";
import {resetPasswordSchema} from "../../validation";
import {zodResolver} from "@hookform/resolvers/zod";
import useResetPassword from "../../hooks/auth/useResetPassword.ts";
import {useNavigate, useParams} from "react-router-dom";
import toast from "react-hot-toast";
import {buttonTheme, formContainerStyle} from "../../styles/styles.ts";
import type {ResetPasswordSchema} from "../../types";
import {handleAxiosError} from "../../utils/functions.ts";
import {ROUTES_PATHS_DATA} from "../../constants";
import Label from "../ui/Label.tsx";

const ResetPasswordForm = () => {
  /* ** HOOKS ** */
  const {token} = useParams()
  const navigate = useNavigate()
  const {mutateAsync, isPending} = useResetPassword()
  const {handleSubmit, register, formState: {errors}} = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    mode: 'onChange'
  })
  /* ** HANDLERS ** */
  // On Submit Handler
  const onSubmit: SubmitHandler<ResetPasswordSchema> = async ({password}) => {
    try {
      if (!token) return
      await mutateAsync({password, token})
      toast.success('Password updated successfully. Back to Sign In',)
      navigate(ROUTES_PATHS_DATA.login)
    } catch (e) {
      handleAxiosError(e)
    }
  }
  return (
    <Box sx={formContainerStyle}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{width: '100%', mb: '15px'}}>
          <Label id={'password'}>New password</Label>
          <Input type={'password'}
                 placeholder={'enter new password'}
                 variant={'outlined'}
                 id={'password'}
                 {...register('password')}
                 error={!!errors['password']}
                 helperText={errors['password']?.message}
          />
        </Box>
        <Box sx={{width: '100%', mb: '15px'}}>
          <Label id={'password_confirm'}>Confirm new password</Label>
          <Input type={'password'}
                 placeholder={'enter new password again'}
                 variant={'outlined'}
                 id={'password_confirm'}
                 {...register('password_confirm')}
                 error={!!errors['password_confirm']}
                 helperText={errors['password_confirm']?.message}
          />
        </Box>
        <Button type={'submit'} sx={buttonTheme} isLoading={isPending}>
          Update Password
        </Button>
      </form>
    </Box>
  );
};

export default ResetPasswordForm;