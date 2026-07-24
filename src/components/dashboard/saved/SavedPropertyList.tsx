import LoadingSpinner from "../../../svg/LoadingSpinner.tsx";
import {Box, Grid} from "@mui/material";
import NotFound from "../../ui/NotFound.tsx";
import useGetSavedProperties from "../../../hooks/save/useGetSavedProperties.ts";
import type {SavedProperty} from "../../../interfaces";
import SavedPropertyCard from "./SavedPropertyCard.tsx";
import HeaderInfo from "../../ui/HeaderInfo.tsx";

const SavedPropertyList = () => {
  const {data, isPending} = useGetSavedProperties()
  if (isPending) return <LoadingSpinner/>
  return (
    <Box sx={{flexGrow: 1}}>
      <HeaderInfo title={`Saved Properties`}
                  description={`${data?.length ?? 0} saved ${data?.length === 1 ? "property" : "properties"}.`}/>
      <Grid container spacing={{xs: 2, md: 3}}>
        {data?.length ? data.map((property: SavedProperty) =>
          <Grid size={{xs: 12, sm: 6, lg: 4, bigXl: 3}}
                key={property._id}>
            <SavedPropertyCard property={property.property}/>
          </Grid>) : <NotFound message={"You don't save any property yet"}/>}
      </Grid>
    </Box>
  );
};

export default SavedPropertyList;