import {Box} from "@mui/material";
import SavedPropertyList from "../../components/dashboard/saved/SavedPropertyList.tsx";

const SavedProperties = () => {
  return (
    <Box sx={{py: '20px', px: '20px'}}>
      <SavedPropertyList/>
    </Box>
  );
};

export default SavedProperties;