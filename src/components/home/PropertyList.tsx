import {Box, Grid} from "@mui/material";
import PropertyCard from "./propertyCard.tsx";
import useGetProperties from "../../hooks/property/useGetProperties.ts";
import LoadingSpinner from "../../svg/LoadingSpinner.tsx";
import type {Property} from "../../interfaces";
import NotFound from "../ui/NotFound.tsx";

const PropertyList = () => {
  const {data, isPending} = useGetProperties()
  if (isPending) return <LoadingSpinner/>
  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={{xs: 2, md: 3}}>
        {data?.length > 0 ? data.map((property: Property) =>
          <Grid size={{xs: 12, sm: 6, md: 4, lg: 4, xl: 3}}
                key={property._id}>
            <PropertyCard property={property}/>
          </Grid>) : <NotFound message={'No properties found'}/>}
      </Grid>
    </Box>
  );
};

export default PropertyList;