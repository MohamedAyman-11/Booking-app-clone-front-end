import {Box, Typography} from "@mui/material";
import {PlusIcon} from "lucide-react";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import {ROUTES_PATHS_DATA} from "../../../../constants";
import HeaderInfo from "../../../ui/HeaderInfo.tsx";

const HostPropertiesHeader = () => {
  return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <HeaderInfo title={'Properties'} description={'Mange your listed properties and track their'}/>
      <Button component={Link} to={ROUTES_PATHS_DATA.addProperty} variant={'contained'}
              sx={{p: '10px 18px', gap: '5px'}}>
        <PlusIcon size={19} strokeWidth={'3px'}/>
        <Typography sx={{display: {xs: 'none', md: 'block'}, fontSize: {xs: '14px', md: '16px'}}}>Add New
          Property</Typography>
      </Button>
    </Box>
  );
};

export default HostPropertiesHeader;