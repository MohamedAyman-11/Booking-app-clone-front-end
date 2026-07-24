import {Box, IconButton, Typography} from "@mui/material";
import {MinusIcon, PlusIcon} from "lucide-react";
import {type Dispatch, memo, type SetStateAction} from "react";

interface Props {
  setGuests: Dispatch<SetStateAction<number>>
  guests: number;
  propertyGuests: number
}

const BookingBoxGuestsHandler = ({guests, propertyGuests, setGuests}: Props) => {
  const onIncreaseHandler = () => {
    if (guests < 1) return;
    if (guests >= propertyGuests) {
      setGuests(propertyGuests)
      return;
    }
    setGuests(prev => prev + 1)
  }
  const onDecreaseHandler = () => {
    if (guests <= 1) return;
    setGuests(prev => prev - 1)
  }
  return (
    <Box sx={{
      mt: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      border: '1px solid',
      borderColor: 'grey.400',
      p: '10px 14px',
      borderRadius: '14px'
    }}>
      <Typography sx={{fontWeight: 'bold', fontSize: '20px'}}>Guests</Typography>
      <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center'}}>
        <IconButton disabled={guests == 1} onClick={onDecreaseHandler}
                    sx={{
                      bgcolor: 'rgb(255 255 255 / 0.42)', boxShadow: "inset 0 0px 3px rgba(0,0,0,0.5)",
                      '&.Mui-disabled': {cursor: 'not-allowed', bgcolor: '#FFFFFF6B'}
                    }}><MinusIcon/></IconButton>
        <Typography sx={{fontWeight: 'bold', userSelect: 'none'}}>{guests}</Typography>
        <IconButton disabled={guests == propertyGuests} onClick={onIncreaseHandler}
                    sx={{
                      bgcolor: '#fff', boxShadow: "inset 0 0px 3px rgba(0,0,0,0.5)",
                      '&.Mui-disabled': {cursor: 'not-allowed', bgcolor: '#FFFFFF6B'}
                    }}><PlusIcon/></IconButton>
      </Box>
    </Box>
  );
};

export default memo(BookingBoxGuestsHandler);