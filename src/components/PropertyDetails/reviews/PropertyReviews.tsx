import {Box, Stack, Typography} from "@mui/material";
import type {Property} from "../../../interfaces";
import GuestReviewCard from "./GuestReviewCard.tsx";
import Button from "../../ui/Button.tsx";
import {ChevronDown} from "lucide-react";
import FullScreenModal from "./FullScreenModal.tsx";
import {useState} from "react";

interface Props {
  property: Property
}

const PropertyReviews = ({property}: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Box sx={{py: '20px'}}>
        <Stack direction={'row'} sx={{alignItems: 'center', gap: '10px'}}>
          <Typography sx={{fontSize: '20px', fontWeight: 'bold'}}>Guest reviews</Typography>
          <Typography component={'span'} sx={{display: 'inline'}}>({property.reviews.length})</Typography>
        </Stack>
        {property.reviews.map((review, i) => {
          if (i == 2) return;
          return <GuestReviewCard key={review._id} review={review}/>;
        })}
        {property.reviews.length > 3 &&
          <Button onClick={handleOpen} variant={'outlined'} size={'large'}
                  sx={{
                    mx: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mt: '20px',
                    px: '30px',
                    py: '10px',
                    gap: '10px',
                    color: '#000',
                    border: '1px solid #ccc',
                    borderRadius: '12px'
                  }}
                  isLoading={false}>Load all reviews ({property.reviews.length}) <ChevronDown/></Button>}
      </Box>
      <FullScreenModal open={open} handleClose={handleClose} reviews={property.reviews}/>
    </>
  );
};

export default PropertyReviews;