import {Box} from "@mui/material";
import Input from "../ui/Input.tsx";
import Button from "../ui/Button.tsx";
import {recoveryEmailSchema} from "../../validation";
import {type SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import useRecoveryEmail from "../../hooks/auth/useRecoveryEmail.ts";
import toast from "react-hot-toast";
import {buttonTheme, formContainerStyle} from "../../styles/styles.ts";
import useAccountDeactivatedHandler from "../../hooks/handlers/useAccountDeactivatedHandler.ts";
import type {ForgotPasswordSchema} from "../../types";


const ForgotPasswordForm = () => {

  /* ** HOOKS ** */
  const {mutateAsync, isPending} = useRecoveryEmail()
  const {handleAccountDeactivatedError} = useAccountDeactivatedHandler()
  const {register, handleSubmit, formState: {errors}} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(recoveryEmailSchema),
    mode: 'onChange'
  })
  /* ** HANDLERS ** */
  // On Submit Handler
  const onSubmit: SubmitHandler<ForgotPasswordSchema> = async (data) => {
    try {
      const response = await mutateAsync(data)
      toast.success(response.message)
      toast.success('Check your email for a password reset link.')
    } catch (error) {
      handleAccountDeactivatedError(error)
    }
  }
  return (
    <Box sx={formContainerStyle}>
      <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{width: '100%', mb: '15px'}}>
          <Input type={'email'}
                 placeholder={'enter your email address'}
                 variant={'outlined'}
                 id={'email'}
                 {...register('email')}
                 error={!!errors['email']}
                 helperText={errors['email']?.message}
          />
        </Box>
        <Button type={'submit'} sx={buttonTheme} isLoading={isPending}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default ForgotPasswordForm;