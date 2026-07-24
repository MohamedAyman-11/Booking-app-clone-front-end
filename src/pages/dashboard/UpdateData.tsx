import {alpha, Box, Divider, Stack, Typography,} from "@mui/material";
import Input from "../../components/ui/Input.tsx";
import Button from "../../components/ui/Button.tsx";
import {type ChangeEvent, useEffect, useState} from "react";
import useCurrentUser from "../../hooks/user/useCurrentUser.ts";
import {type SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";
import {userDataSchema} from "../../validation";
import {zodResolver} from "@hookform/resolvers/zod";
import useUpdateMyData from "../../hooks/user/useUpdateMyData.ts";
import toast from "react-hot-toast";
import {handleAxiosError} from "../../utils/functions.ts";
import useInvalidateQueries from "../../hooks/handlers/useInvalidateQueries.ts";
import Label from "../../components/ui/Label.tsx";
import UserAvatar from "../../components/dashboard/profile/UserAvatar.tsx";
import {QUERY_KEYS} from "../../constants";

const UpdateData = () => {

  type TInput = z.infer<typeof userDataSchema>
  const {invalidateQueries} = useInvalidateQueries()
  const {mutateAsync, isPending} = useUpdateMyData()
  const {data} = useCurrentUser()
  const user = data?.user
  const [file, setFile] = useState<File | null>(null)
  const {reset, register, formState: {errors}, handleSubmit} = useForm<TInput>({
    defaultValues: {
      email: '',
      name: '',
    },
    resolver: zodResolver(userDataSchema),
    mode: 'onChange'
  })
  /* ** Handlers ** */
  useEffect(() => {
    if (!user) return;
    reset({
      email: user.email,
      name: user.name,
    })
  }, [reset, user]);

  // Change Profile Photo Handler
  const handleEventChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const file = e.target.files[0];
    setFile(file);
  }
  const onSubmit: SubmitHandler<TInput> = async (data) => {
    try {
      const formData = new FormData()
      formData.append('name', data.name)
      if (file) formData.append('photo', file)
      await mutateAsync(formData)
      await invalidateQueries(QUERY_KEYS.currentUser)
      toast.success("Profile updated successfully.");
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
        py: '20px', px: '20px',
        bgcolor: "background.paper",
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "0 8px 25px rgba(0,0,0,.08)",
      }}
    >
      <Typography
        variant="h4"
        sx={{fontWeight: 700, textAlign: 'center',}}
      >
        Personal Information
      </Typography>

      <Typography
        sx={{textAlign: 'center', mb: 4, color: '#595959'}}
      >
        Manage your account information.
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing={4}>
          <Box
            sx={{display: 'flex', justifyContent: 'center'}}
          >
            <UserAvatar
              file={file}
              user={user}
              handleEventChange={handleEventChange}
            />

          </Box>
          <Divider/>

          <Stack spacing={3}>
            <Box>
              <Label id="name">Full Name</Label>

              <Input
                fullWidth
                id="name"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </Box>

            <Box>
              <Label id="email">Email Address</Label>

              <Input
                fullWidth
                disabled
                id="email"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Box>
          </Stack>

          <Button
            fullWidth
            variant="contained"
            size="large"
            type="submit"
            isLoading={isPending}
            sx={{
              py: 1.5,
              borderRadius: 3,
              fontWeight: 600,
              transition: 'all 0.3s ease',
              ':hover': {
                transform: 'translateY(-2px) scale(1.001)',
                boxShadow: `0 1px 10px ${alpha('#007aff', 0.9)}`
              }
            }}
          >
            Save Changes
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default UpdateData;