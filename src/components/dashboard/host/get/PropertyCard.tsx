import {Box, Card, Divider, Typography} from "@mui/material";
import type {Property} from "../../../../interfaces";
import PropertyCardLocation from "../../../home/PropertyCardLocation.tsx";
import PropertyCardReview from "../../../home/PropertyCardReview.tsx";
import PropertyCardPrice from "../../../home/PropertyCardPrice.tsx";
import {cardStyle} from "../../../../styles/styles.ts";
import PropertyMessage from "./PropertyMessage.tsx";
import PropertyCardStatus from "./PropertyCardStatus.tsx";
import PropertyCardActions from "./PropertyCardActions.tsx";


interface Props {
  property: Property
}

const PropertyCard = ({property}: Props) => {
  return (
    <Card sx={{
      ...cardStyle,
      position: 'relative',
      borderRadius: '12px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      ':hover': {
        transform: 'translateY(-4px) scale(1.01)'
      },
    }}>
      <PropertyCardStatus status={property.status} discount={property?.discount}/>
      <Box sx={{
        aspectRatio: 5 / 4
      }}>
        <Box component={'img'}
             src={property.images[0].url}
             sx={{
               height: '100%',
               width: '100%',
               objectFit: 'cover'
             }}
             alt={'Property Image'}
        />
      </Box>
      <Box sx={{px: "10px"}}>
        <Box>
          <Typography component={'h5'} sx={{
            fontSize: {xs: '16px', md: '14px', lg: '16px'},
            color: '#1A1A1A',
            fontWeight: 'bold',
          }}>{property.name}</Typography>
        </Box>
        <PropertyCardLocation city={property.location.city} country={property.location.country}/>
        <PropertyCardReview averageRating={property.averageRating} ratingsQuantity={property.ratingsQuantity}/>
        <PropertyCardPrice price={property.pricePerNight} discount={property?.discount}/>
      </Box>
      <Divider sx={{mt: '20px'}}/>
      <PropertyMessage status={property.status} rejectReason={property?.rejectReason}/>
      <PropertyCardActions property={property}/>
    </Card>
  );
};

export default PropertyCard;