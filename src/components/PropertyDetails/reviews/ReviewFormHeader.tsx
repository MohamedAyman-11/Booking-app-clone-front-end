import {Box, IconButton, Stack, Typography} from "@mui/material";
import {XIcon} from "lucide-react";
import {memo} from "react";

interface Props {
  onClose: () => void
}

const ReviewFormHeader = ({onClose}: Props) => {
  return (
    <Stack sx={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', mb: '20px'}}>
      <Box>
        <Typography sx={{color: '#1A1A1A', fontWeight: 'bold', fontSize: '24px'}}>Write a review</Typography>
        <Typography sx={{color: '#595959', fontSize: '13px'}}>Share your experience to help other
          travellers</Typography>
      </Box>
      <IconButton disableRipple={true} sx={theme => ({
        border: '1px solid',
        borderColor: 'divider',
        p: 1,
        '& svg': {transition: 'all 0.3s ease'},
        ':hover svg': {color: theme.palette.error.light, rotate: '90deg'}
      })} onClick={onClose}><XIcon/></IconButton>
    </Stack>
  );
};

export default memo(ReviewFormHeader);