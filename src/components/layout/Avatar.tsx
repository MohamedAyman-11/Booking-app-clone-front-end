import Avatar from '@mui/material/Avatar';

// function stringAvatar(name: string) {
//   return {
//     sx: {
//       bgcolor: stringToColor(name),
//     },
//     children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
//   };
// }

const UserAvatar = () => {
  const user = true;
  return <Avatar src={`${user?`/public/photo_2026-03-07_02-44-48.jpg`:`/public/default.png`}`} sx={{
    width:{
      xs:'32px',
      sm:'40px'
    },
    height:{
      xs:'32px',
      sm:'40px'
    },
  }} />;
};

export default UserAvatar;
