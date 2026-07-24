import {Box, Card, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import type {Property} from "../../../interfaces";
import SavePropertyIcon from "../../home/SavePropertyIcon.tsx";
import PropertyCardContentHeader from "../../home/PropertyCardContentHeader.tsx";
import PropertyCardReview from "../../home/PropertyCardReview.tsx";
import PropertyCardPrice from "../../home/PropertyCardPrice.tsx";
import {cardStyle} from "../../../styles/styles.ts";


interface Props {
  property: Property
}

const SavedPropertyCard = ({property}: Props) => {
  return (
    <Box component={Link} to={`/property?property_id=${property._id}&property_type=${property.propertyType}`} sx={{
      textDecoration: 'none'
    }}>
      <Card sx={cardStyle}>
        <SavePropertyIcon isSaved={true} propertyId={property._id}/>
        {/*Image*/}
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
        {/*Content*/}
        <Box className={'property-content'} sx={{
          padding: '8px'
        }}>
          {/*Property Type And Starts*/}
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
          <Box>
            <Typography component={'span'} sx={{
              color: '#5959595',
              fontSize: '12px'
            }}>Cairo, Egypt</Typography>
          </Box>
          {/*Property Review*/}
          <PropertyCardReview averageRating={property.averageRating} ratingsQuantity={property.ratingsQuantity}/>
          {/*Price And Discount*/}
          <PropertyCardPrice price={property.pricePerNight} discount={property?.discount}/>
        </Box>
      </Card>
    </Box>
  );
};

export default SavedPropertyCard;