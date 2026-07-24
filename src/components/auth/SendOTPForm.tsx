import {Box} from "@mui/material";
import Input from "../ui/Input.tsx";
import Button from "../ui/Button.tsx";
import {useNavigate} from "react-router-dom";
import {restoreAccountSchema} from "../../validation";
import {type SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import useSendOTP from "../../hooks/auth/useSendOTP.ts";
import toast from "react-hot-toast";
import {buttonTheme, formContainerStyle} from "../../styles/styles.ts";
import type {SendOtpSchema} from "../../types";
import {ROUTES_PATHS_DATA} from "../../constants";
import {handleAxiosError} from "../../utils/functions.ts";

const SendOTPForm = () => {
  const {mutateAsync, isPending} = useSendOTP()
  const navigate = useNavigate()
  const {register, handleSubmit, formState: {errors}} = useForm<SendOtpSchema>({
    resolver: zodResolver(restoreAccountSchema),
    mode: 'onChange'
  })
  const onSubmit: SubmitHandler<SendOtpSchema> = async (data) => {
    try {
      const response = await mutateAsync(data)
      toast.success(response.message)
      navigate(ROUTES_PATHS_DATA.activateAccount)
    } catch (e) {
      handleAxiosError(e)
    }
  }
  return (
    <Box sx={formContainerStyle}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{width: '100%', mb: '15px'}}>
          <Input type={'email'}
                 placeholder={'enter your email address'}
                 variant={'outlined'}
                 id={'email'}
                 {...register('email')}
                 error={!!errors.email}
                 helperText={errors.email?.message}
          />
        </Box>
        <Button type={'submit'} sx={buttonTheme} isLoading={isPending}>
          Continue
        </Button>
      </form>
    </Box>
  );
};

export default SendOTPForm;