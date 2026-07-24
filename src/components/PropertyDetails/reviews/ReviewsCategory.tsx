import {Box, Stack, Typography} from "@mui/material";
import {BrushIcon, CheckCircleIcon, KeyIcon, MapIcon, MessageSquare, Tag} from "lucide-react";

interface Props {
  stats: {
    _id: string,
    overAllRating: number,
    cleanliness: number,
    location: number,
    accuracy: number,
    check_in: number,
    communication: number,
    value: number,
    ratingsQuantity: number,
  }
}

const ReviewsCategory = ({stats}: Props) => {
  return (
    <Box sx={{py: '30px'}}>
      <Stack direction={'row'} sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        rowGap: '40px'
      }}>
        <Box sx={{
          pr: '30px',

          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
          <Typography>Cleanliness</Typography>
          <Typography sx={{mb: '10px'}}>{stats.cleanliness.toFixed(1)}</Typography>
          <BrushIcon size={30}/>
        </Box>
        <Box sx={{
          pr: '30px',

          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
          <Typography>Accuracy</Typography>
          <Typography sx={{mb: '10px'}}>{stats.accuracy.toFixed(1)}</Typography>
          <CheckCircleIcon size={30}/>
        </Box>
        <Box sx={{
          pr: '30px',

          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
          <Typography>Check-in</Typography>
          <Typography sx={{mb: '10px'}}>{stats.check_in.toFixed(1)}</Typography>
          <KeyIcon size={30}/>
        </Box>
        <Box sx={{
          pr: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
          <Typography>Communication</Typography>
          <Typography sx={{mb: '10px'}}>{stats.communication.toFixed(1)}</Typography>
          <MessageSquare size={30}/>
        </Box>
        <Box sx={{
          pr: '30px',

          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
          <Typography>Location</Typography>
          <Typography sx={{mb: '10px'}}>{stats.location.toFixed(1)}</Typography>
          <MapIcon size={30}/>
        </Box>
        <Box sx={{
          pr: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
          <Typography>Value</Typography>
          <Typography sx={{mb: '10px'}}>{stats.value?.toFixed(1)}</Typography>
          <Tag size={30}/>
        </Box>
      </Stack>
    </Box>
  );
};

export default ReviewsCategory;