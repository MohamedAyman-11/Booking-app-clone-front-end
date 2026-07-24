import {Box, Stack, Typography} from "@mui/material";

interface Props {
  overAllRating: number
}

const ReviewOverAll = ({overAllRating}: Props) => {
  return (
    <Box>
      <Stack direction={'row'} sx={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px'
      }}>
        <Box sx={{
          height: '132px',
          width: '86px'
        }}>
          <Box component={'img'} src={'/public/img/left_tag.avif'} sx={{
            width: '100%',
            height: '100%'
          }} alt={'Review Tag'}/>
        </Box>
        <Typography sx={{
          fontSize: '100px',
          fontWeight: 'bold'
        }}>{overAllRating.toFixed(1)}</Typography>
        <Box sx={{
          height: '132px',
          width: '86px'
        }}>
          <Box component={'img'} src={'/public/img/right_tag.avif'} sx={{
            width: '100%',
            height: '100%'
          }} alt={'Review Tag'}/>
        </Box>
      </Stack>
    </Box>
  );
};

export default ReviewOverAll;