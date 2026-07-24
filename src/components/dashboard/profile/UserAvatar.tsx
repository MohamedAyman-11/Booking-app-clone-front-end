import {Box} from "@mui/material";
import type {User} from "../../../interfaces";
import Button from "@mui/material/Button";
import {CloudUploadIcon} from "lucide-react";
import Avatar from "@mui/material/Avatar";
import {stringAvatar} from "../../../utils/functions.ts";
import type {ChangeEvent} from "react";

interface Props {
  file: File | null,
  user: User,
  handleEventChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const UserAvatar = ({file, user, handleEventChange}: Props) => {
  const avatarProps = stringAvatar(user.name, '36px');
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '20px'
    }}>
      {file ?
        <Avatar
          src={URL.createObjectURL(file)}
          sx={{width: 140, height: 140}}
        /> : user?.photo?.url ? <Avatar
          src={user.photo.url}
          sx={{width: 140, height: 140}}
        /> : <Avatar
          {...avatarProps}
          sx={{
            ...avatarProps.sx,
            width: 140, height: 140
          }}
        />
      }
      <input
        type="file"
        id="file-upload"
        hidden
        onChange={handleEventChange}
      />
      <label htmlFor="file-upload">
        <Button
          variant="outlined"
          component="span"
          sx={{
            display: 'flex',
            width: '100%'
          }}
          startIcon={<CloudUploadIcon/>}
        >
          Change Photo
        </Button>
      </label>
    </Box>
  );
};

export default UserAvatar;