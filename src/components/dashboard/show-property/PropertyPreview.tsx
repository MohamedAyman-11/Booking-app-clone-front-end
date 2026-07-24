import {Box, useMediaQuery} from "@mui/material";
import {useSearchParams} from "react-router-dom";
import useGetProperty from "../../../hooks/property/useGetProperty.ts";
import LoadingSpinner from "../../../svg/LoadingSpinner.tsx";
import PropertyDetailsGallery from "../../PropertyDetails/PropertyDetailsGallery.tsx";
import SmallScreenGallery from "../../PropertyDetails/SmallScreenGallery.tsx";
import {useTheme} from "@mui/material/styles";
import PropertyDetailsLocation from "../../PropertyDetails/PropertyDetailsLocation.tsx";
import PropertyHostDetails from "../../PropertyDetails/PropertyHostDetails.tsx";
import PropertyDescription from "../../PropertyDetails/PropertyDescription.tsx";
import PropertyAmenities from "../../PropertyDetails/PropertyAmenities.tsx";
import PropertyReviewsInfo from "../../PropertyDetails/reviews/PropertyReviewsInfo.tsx";
import NotFound from "../../ui/NotFound.tsx";
import PropertyPreviewHeader from "./PropertyPreviewHeader.tsx";

const PropertyPreview = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('md'))
  const [searchParams] = useSearchParams()
  const propertyId = searchParams.get('property_id');
  const {isPending, data} = useGetProperty(propertyId ?? '')
  if (isPending) return <LoadingSpinner/>
  return (
    <Box>
      <PropertyPreviewHeader property={data}/>
      {isSmall ? <SmallScreenGallery images={data.images}/> : <PropertyDetailsGallery images={data.images}/>}
      <Box>
        <PropertyDetailsLocation property={data}/>
        <PropertyHostDetails name={data.host?.name} url={data.host?.photo?.url}/>
        <PropertyDescription description={data.description}/>
      </Box>
      <PropertyAmenities amenities={data.amenities}/>
      {data.status === 'pending' ? <NotFound message={'Reviews will be available after the property is approved.'}/> :
        <PropertyReviewsInfo stats={data.stats} property={data}/>}
    </Box>
  );
};

export default PropertyPreview;