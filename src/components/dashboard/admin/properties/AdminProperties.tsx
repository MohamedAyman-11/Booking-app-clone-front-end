import {Box, Stack} from "@mui/material";
import {hostStackStyle} from "../../../../styles/styles.ts";
import CustomTabs from "../../../ui/CustomTabs.tsx";
import SortMenu from "../../../ui/SortMenu.tsx";
import {type SyntheticEvent, useState} from "react";
import type {SelectChangeEvent} from "@mui/material/Select";
import PropertiesTable from "./PropertiesTable.tsx";
import useAdminProperties from "../../../../hooks/admin/useAdminProperties.ts";
import LoadingSpinner from "../../../../svg/LoadingSpinner.tsx";
import NotFound from "../../../ui/NotFound.tsx";
import {SORT_OPTIONS, SORT_STATUS_OPTIONS,} from "../../../../constants";
import HeaderInfo from "../../../ui/HeaderInfo.tsx";


const AdminProperties = () => {
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
  const {data, isPending} = useAdminProperties({status: value, sortBy: sortOption})
  if (isPending) return <LoadingSpinner/>
  return (
    <Box>
      <HeaderInfo title={`Properties`} description={`Manage all properties on the platforms`}/>
      <Box sx={{mb: '50px', mt: '20px'}}>
        <Stack sx={hostStackStyle}>
          <CustomTabs setValue={handleChange} options={SORT_STATUS_OPTIONS} value={value}/>
          <SortMenu onchange={handleSortOptionChange} value={sortOption} sortOptions={SORT_OPTIONS}/>
        </Stack>
      </Box>
      {data.length ?
        <PropertiesTable properties={data}/> : <NotFound message={'No properties have been added yet'}/>
      }
    </Box>
  );
};

export default AdminProperties;