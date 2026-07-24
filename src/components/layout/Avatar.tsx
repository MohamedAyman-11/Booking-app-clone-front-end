import Avatar from '@mui/material/Avatar';
import {stringAvatar} from "../../utils/functions.ts";

interface Props {
  user?: {
    _id: string,
    name: string,
    email: string,
    photo: {
      url: string
    }
  }
}


const UserAvatar = ({user}: Props) => {

  if (!user) {
    return (
      <Avatar
        alt={'Default Image'}
        src="/default.png"
        sx={{
          width: {
            xs: '32px',
            sm: '40px',
          },
          height: {
            xs: '32px',
            sm: '40px',
          },
        }}
      />
    );
  }
  const avatarProps = stringAvatar(user.name);
  if (!user?.photo?.url) {
    return (
      <Avatar
        {...avatarProps}
        sx={{
          ...avatarProps.sx,
          width: {
            xs: '32px',
            sm: '40px',
          },
          height: {
            xs: '32px',
            sm: '40px',
          },
        }}
      >{avatarProps.children}</Avatar>
    );
  }
  return (
    <Avatar
      alt={'User Photo'}
      src={user?.photo?.url}
      sx={{
        width: {
          xs: '32px',
          sm: '40px',
        },
        height: {
          xs: '32px',
          sm: '40px',
        },
      }}
    />
  )

};

export default UserAvatar;
