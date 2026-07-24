import {Box} from "@mui/material";
import Input from "../ui/Input.tsx";
import Button from "../ui/Button.tsx";
import {type SubmitHandler, useForm} from "react-hook-form";
import {otpFormSchema} from "../../validation";
import {zodResolver} from "@hookform/resolvers/zod";
import useActivateAccount from "../../hooks/auth/useActivateAccount.ts";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {buttonTheme, formContainerStyle} from "../../styles/styles.ts";
import {handleAxiosError} from "../../utils/functions.ts";
import {ROUTES_PATHS_DATA} from "../../constants";
import type {ActivateAccountSchema} from "../../types";


const ActivateAccountForm = () => {
  const navigate = useNavigate()
  const {mutateAsync, isPending} = useActivateAccount()
  const {handleSubmit, register, formState: {errors}} = useForm<ActivateAccountSchema>({
    resolver: zodResolver(otpFormSchema),
    mode: 'onChange'
  })
  const onSubmit: SubmitHandler<ActivateAccountSchema> = async (data) => {
    try {
      const response = await mutateAsync({otp: data.otp})
      toast.success(response.message)
      navigate(ROUTES_PATHS_DATA.login)
    } catch (e) {
      handleAxiosError(e)
    }
  }
  return (
    <Box sx={formContainerStyle}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{width: '100%', mb: '15px'}}>
          <Input type={'text'}
                 placeholder={'XXXXXX'}
                 variant={'outlined'}
                 id={'otp'}
                 {...register('otp')}
                 error={!!errors.otp}
                 helperText={errors.otp?.message}
          />
        </Box>
        <Button type={'submit'} sx={buttonTheme} isLoading={isPending}>
          Verify Account
        </Button>
      </form>
    </Box>
  );
};

export default ActivateAccountForm;