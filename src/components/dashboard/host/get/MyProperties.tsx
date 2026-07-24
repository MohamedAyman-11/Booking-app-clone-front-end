import {Box, Grid, Stack} from "@mui/material";
import HostPropertiesHeader from "./HostPropertiesHeader.tsx";
import PropertiesStatsList from "./PropertiesStatsList.tsx";
import useGetMyProperties from "../../../../hooks/host/useGetMyProperties.ts";
import LoadingSpinner from "../../../../svg/LoadingSpinner.tsx";
import {type SyntheticEvent, useState} from "react";
import CustomTabs from "../../../ui/CustomTabs.tsx";
import SortMenu from "../../../ui/SortMenu.tsx";
import type {SelectChangeEvent} from "@mui/material/Select";
import {hostStackStyle} from "../../../../styles/styles.ts";
import PropertyCard from "./PropertyCard.tsx";
import NotFound from "../../../ui/NotFound.tsx";
import type {Property} from "../../../../interfaces";
import {SORT_OPTIONS} from "../../../../constants";

const options = [
  {
    text: 'All Properties',
    value: 'all'
  },
  {
    text: 'Accepted',
    value: 'accepted'
  },
  {
    text: 'Rejected',
    value: 'rejected'
  },
  {
    text: 'Pending',
    value: 'pending'
  }]

const MyProperties = () => {
  // Handle Properties Sort Option
  const [sortOption, setSortOption] = useState('-createdAt');
  const handleSortOptionChange = (event: SelectChangeEvent) => {
    setSortOption(event.target.value as string);
  };
  // Handle Property Status Filter
  const [value, setValue] = useState('all');
  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  // Fetch Host Properties
  const {data, isPending} = useGetMyProperties({status: value, sortBy: sortOption});
  if (isPending) return <LoadingSpinner/>
  return (
    <Box>
      <HostPropertiesHeader/>
      <PropertiesStatsList stats={data?.stats}/>
      <Box>
        <Stack sx={hostStackStyle}>
          <CustomTabs setValue={handleChange} options={options} value={value}/>
          <SortMenu onchange={handleSortOptionChange} value={sortOption} sortOptions={SORT_OPTIONS}/>
        </Stack>
      </Box>
      <Box sx={{flexGrow: 1, mt: '30px'}}>
        <Grid container spacing={{xs: 2, md: 3}}>
          {data?.properties.length > 0 ? data?.properties.map((property: Property) =>
            <Grid size={{xs: 12, sm: 6, md: 6, xl: 4, bigXl: 3}}
                  key={property._id}>
              <PropertyCard property={property}/>
            </Grid>) : <NotFound message={'No properties match the selected filters'}/>}
        </Grid>
      </Box>
    </Box>
  );
};

export default MyProperties;