import {type SubmitHandler, useForm} from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'
import {Box, type Theme, Typography} from "@mui/material";
import {RegisterFormData} from "../data";
import Input from "./Input.tsx";
import Button from "./Button.tsx";
import Google from "../svg/Google.tsx";
import {Link, useNavigate} from "react-router-dom";
import {registerSchema} from "../validation";
import useRegister from "../hooks/auth/useRegister.ts";
import toast from "react-hot-toast";
import axios from "axios";

const googleBtnTheme = (theme: Theme) => ({
  background: 'transparent',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 500,
  padding: '10px',
  cursor: 'pointer',
  width: '100%',
  border: '1px solid #ccc',
  mb: '20px',
  '&:hover': {
    borderColor: theme.palette.brand.primary
  }
})
const theme = (theme: Theme) => ({
  background: '#006ce4',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 500,
  padding: '10px',
  cursor: 'pointer',
  width: '100%',
  transition: 'all .3s',
  '&:hover': {
    background: theme.palette.brand.primary
  }
})
const RegisterForm = () => {
  const {mutateAsync, isPending} = useRegister()
  const navigate = useNavigate()
  type TInput = z.infer<typeof registerSchema>
  const {register, handleSubmit, formState: {errors},} = useForm<TInput>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange'
  })
  const onSubmit: SubmitHandler<TInput> = async (data) => {
    try {
      await mutateAsync(data);
      toast.success('Account created successfully')
      setTimeout(() => {
        navigate('/login')
      }, 1000)
    } catch (error) {
      const errorMsg = axios.isAxiosError(error) ? error.response?.data?.message : 'Something went wrong'
      toast.error(errorMsg)
    }
  }
  return (
    <Box sx={{
      maxWidth: '420px',
      mx: 'auto'
    }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {
          RegisterFormData.map(({type, id, name, placeholder, label}) => {
            return <Box sx={{width: '100%', mb: '15px'}} key={id}>
              <Typography component={'label'} htmlFor={id}
                          sx={{
                            fontSize: '14px',
                            color: '#1A1A1A',
                            mb: '5px',
                            display: 'block'
                          }}>{label}</Typography>
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
        <Button type={'submit'} sx={theme} isLoading={isPending}>
          Continue with email
        </Button>
      </form>
      <Box sx={{display: 'flex', alignItems: 'center', gap: '15px', my: '15px'}}>
        <Typography sx={{height: '2px', width: '100%', background: '#eee'}}/>
        <Typography>OR</Typography>
        <Typography sx={{height: '2px', width: '100%', background: '#eee'}}/>
      </Box>
      <Button isLoading={false} sx={googleBtnTheme}><Google/></Button>
      <Typography sx={{fontSize: '14px', textAlign: 'center'}}>Lost access to your email? <Typography
        sx={(theme) => ({
          color: theme.palette.brand.primary,
          textDecoration: 'none',
          fontSize: '14px'
        })} component={Link} to={'/recovery-email'}>Recover your account</Typography></Typography>
    </Box>
  );
};

export default RegisterForm;