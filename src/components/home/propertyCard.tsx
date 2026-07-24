import {Box, Card, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import type {Property} from "../../interfaces";
import PropertyCardImage from "./PropertyCardImage.tsx";
import PropertyCardPrice from "./PropertyCardPrice.tsx";
import PropertyCardContentHeader from "./PropertyCardContentHeader.tsx";
import PropertyCardReview from "./PropertyCardReview.tsx";
import SavePropertyIcon from "./SavePropertyIcon.tsx";
import {cardStyle} from "../../styles/styles.ts";
import PropertyCardLocation from "./PropertyCardLocation.tsx";


interface Props {
  property: Property
}

const PropertyCard = ({property}: Props) => {
  return (
    <Box component={Link} to={`/property?property_id=${property._id}&property_type=${property.propertyType}`} sx={{
      textDecoration: 'none',
    }}>
      <Card sx={cardStyle}>
        <SavePropertyIcon isSaved={property?.isSaved ?? false} propertyId={property._id}/>
        {/*Image*/}
        <PropertyCardImage images={property.images}/>
        {/*Content*/}
        <Box className={'property-content'} sx={{
          padding: '8px'
        }}>
          {/*Property Type And Stars*/}
          <PropertyCardContentHeader stars={property.stars} propertyType={property.propertyType}/>
          {/*Property Name*/}
          <Box>
            <Typography component={'h5'} sx={{
              fontSize: '16px',
              color: '#1A1A1A',
              fontWeight: 'bold',
            }}>{property.name}</Typography>
          </Box>
          {/*Property Location*/}
          <PropertyCardLocation country={property.location.country} city={property.location.city}/>
          {/*Property Review*/}
          <PropertyCardReview averageRating={property.averageRating} ratingsQuantity={property.ratingsQuantity}/>
          {/*Price And Discount*/}
          <PropertyCardPrice price={property.pricePerNight} discount={property?.discount}/>
        </Box>
      </Card>
    </Box>
  );
};

export default PropertyCard;