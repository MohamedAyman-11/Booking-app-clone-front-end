import {Box, Stack, useMediaQuery} from "@mui/material";
import PropertyDetailsHeader from "./PropertyDetailsHeader.tsx";
import PropertyDetailsGallery from "./PropertyDetailsGallery.tsx";
import PropertyDetailsLocation from "./PropertyDetailsLocation.tsx";
import PropertyHostDetails from "./PropertyHostDetails.tsx";
import PropertyDescription from "./PropertyDescription.tsx";
import {useSearchParams} from "react-router-dom";
import useGetProperty from "../../hooks/property/useGetProperty.ts";
import PropertyAmenities from "./PropertyAmenities.tsx";
import PropertyReviewsInfo from "./reviews/PropertyReviewsInfo.tsx";
import LoadingSpinner from "../../svg/LoadingSpinner.tsx";
import Booking from "./booking/Booking.tsx";
import MobileBookingBar from "./booking/MobileBookingBar.tsx";
import {useTheme} from "@mui/material/styles";
import SmallScreenGallery from "./SmallScreenGallery.tsx";

const PropertyDetailsContent = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('md'))
  const [searchParams] = useSearchParams()
  const propertyId = searchParams.get('property_id');
  const {isPending, data} = useGetProperty(propertyId ?? '')
  if (isPending) return <LoadingSpinner/>
  const property = data
  return (
    <Box>
      <PropertyDetailsHeader name={property.name} isSaved={property.isSaved} propertyId={property._id}
                             propertyType={property.propertyType}/>
      {isSmall ? <SmallScreenGallery images={property.images}/> : <PropertyDetailsGallery images={property.images}/>}
      <Stack direction={'row'}
             sx={{alignItems: 'flex-start', justifyContent: 'space-between', gap: '50px', mt: '25px'}}>
        <Box>
          <PropertyDetailsLocation property={property}/>
          <PropertyHostDetails name={property.host?.name} url={property.host?.photo?.url}/>
          <PropertyDescription description={property.description}/>
        </Box>
        <Box sx={{display: {xs: 'none', lg: 'block'},}}>
          <Booking property={property}/>
        </Box>
        <MobileBookingBar property={property}/>
      </Stack>
      <PropertyAmenities amenities={property.amenities}/>
      <PropertyReviewsInfo stats={property.stats} property={property}/>
    </Box>
  );
};

export default PropertyDetailsContent;