import {Box, Typography} from "@mui/material";

interface Props {
  title: string;
  description: string
}

const HeaderInfo = ({title, description}: Props) => {
  return (
    <Box sx={{mb: 3}}>
      <Typography sx={{fontSize: '30px', fontWeight: 'bold'}}>
        {title}
      </Typography>
      <Typography sx={{color: '#595959', mt: 1}}>
        {description}
      </Typography>
    </Box>
  );
};

export default HeaderInfo;