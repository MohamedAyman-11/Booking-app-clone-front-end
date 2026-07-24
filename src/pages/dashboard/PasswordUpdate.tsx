import {alpha, Box, Stack, Typography} from "@mui/material";
import Input from "../../components/ui/Input.tsx";
import Button from "../../components/ui/Button.tsx";
import {type SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";
import {userPasswordSchema} from "../../validation";
import useUpdateMyPassword from "../../hooks/user/useUpdateMyPassword.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import {handleAxiosError} from "../../utils/functions.ts";
import useInvalidateQueries from "../../hooks/handlers/useInvalidateQueries.ts";
import Label from "../../components/ui/Label.tsx";
import {QUERY_KEYS} from "../../constants";

const PasswordUpdate = () => {
  type TInput = z.infer<typeof userPasswordSchema>
  const {invalidateQueries} = useInvalidateQueries()
  const {mutateAsync, isPending} = useUpdateMyPassword()
  const {register, formState: {errors}, handleSubmit} = useForm<TInput>({
    resolver: zodResolver(userPasswordSchema),
    mode: 'onChange'
  })
  /* ** Handler ** */
  const onSubmit: SubmitHandler<TInput> = async (data) => {
    try {
      await mutateAsync({currentPassword: data.current_password, newPassword: data.new_password})
      toast.success('Password updated successfully.')
      await invalidateQueries(QUERY_KEYS.currentUser)
    } catch (e) {
      handleAxiosError(e)
    }
  }
  return (
    <Box
      sx={{
        maxWidth: 650,
        mx: "auto",
        mt: 5,
        py: '20px',
        px: '20px',
        bgcolor: "background.paper",
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "0 8px 25px rgba(0,0,0,.08)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Security & Password
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          color: "text.secondary",
          mb: 4,
          fontSize: '14px'
        }}
      >
        Update your password to keep your account secure.
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack
          spacing={3}
          sx={{
            width: "100%",
          }}
        >
          <Box>
            <Label id="current_password">
              Current Password
            </Label>

            <Input
              id="current_password"
              type="password"
              fullWidth
              {...register("current_password")}
              error={!!errors.current_password}
              helperText={errors.current_password?.message}
            />
          </Box>

          <Box>
            <Label id="new_password">
              New Password
            </Label>

            <Input
              id="new_password"
              type="password"
              fullWidth
              {...register("new_password")}
              error={!!errors.new_password}
              helperText={errors.new_password?.message}
            />
          </Box>

          <Box>
            <Label id="new_password_confirm">
              Confirm New Password
            </Label>

            <Input
              id="new_password_confirm"
              type="password"
              fullWidth
              {...register("new_password_confirm")}
              error={!!errors.new_password_confirm}
              helperText={errors.new_password_confirm?.message}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            isLoading={isPending}
            sx={{
              mt: 2,
              py: 1.5,
              borderRadius: 3,
              fontWeight: 600,
              fontSize: "1rem",
              transition: 'all 0.3s ease',
              ':hover': {
                transform: 'translateY(-2px) scale(1.001)',
                boxShadow: `0 1px 10px ${alpha('#007aff', 0.9)}`
              }
            }}
          >
            Update Password
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default PasswordUpdate;