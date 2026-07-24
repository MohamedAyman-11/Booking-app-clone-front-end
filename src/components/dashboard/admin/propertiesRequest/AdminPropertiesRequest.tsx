import {Box, Typography} from "@mui/material";
import LoadingSpinner from "../../../../svg/LoadingSpinner.tsx";
import useGetPropertiesRequest from "../../../../hooks/admin/useGetPropertiesRequest.ts";
import PropertiesRequestTable from "./PropertiesRequestTable.tsx";
import NotFound from "../../../ui/NotFound.tsx";

const AdminPropertiesRequest = () => {
  const {data, isPending} = useGetPropertiesRequest()
  if (isPending) return <LoadingSpinner/>
  return (
    <Box>
      <Typography sx={{fontSize: '30px', fontWeight: 'bold'}}>
        Property Requests
      </Typography>
      <Typography sx={{color: '#595959'}}>
        Review, approve, or reject property listings submitted by hosts.
      </Typography>
      <Box sx={{mt: '50px'}}>
        {data.length ? <PropertiesRequestTable properties={data}/> :
          <NotFound message={'There are no pending property requests at the moment.'}/>}
      </Box>
    </Box>
  );
};

export default AdminPropertiesRequest;