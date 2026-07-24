import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import {Star} from "@mui/icons-material";

interface Props {
  rate: number,
  showEmptyIcon: boolean
}

const Rate = ({rate, showEmptyIcon}: Props) => {
  return (
    <Box sx={{width: 200, display: 'flex', alignItems: 'center'}}>
      <Rating
        sx={{
          fontSize: '18px',
          '& .MuiRating-iconEmpty': {
            display: `${showEmptyIcon ? 'block' : 'none'}`,
          },
        }}
        name="text-feedback"
        value={rate}
        readOnly
        precision={0.5}
        emptyIcon={<Star style={{opacity: 0.55}} fontSize={'inherit'}/>}
      />
    </Box>
  );
}
export default Rate