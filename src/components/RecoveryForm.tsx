import {Box, type Theme} from "@mui/material";
import Input from "./Input.tsx";
import Button from "./Button.tsx";
import {z} from "zod";
import {recoveryEmailSchema} from "../validation";
import {type SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

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

const RecoveryForm = () => {
  type TInput = z.infer<typeof recoveryEmailSchema>
  const {register, handleSubmit, formState: {errors}} = useForm<TInput>({
    resolver: zodResolver(recoveryEmailSchema),
    mode: 'onChange'
  })
  const onSubmit: SubmitHandler<TInput> = (data) => {
    console.log(data)
  }
  return (
    <Box sx={{
      maxWidth: '420px',
      mx: 'auto'
    }}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Button type={'submit'} sx={theme} isLoading={false}>
          Continue
        </Button>
      </form>
    </Box>
  );
};

export default RecoveryForm;