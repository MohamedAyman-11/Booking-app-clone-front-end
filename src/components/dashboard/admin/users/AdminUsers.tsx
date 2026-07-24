import {Box, Typography} from "@mui/material";
import LoadingSpinner from "../../../../svg/LoadingSpinner.tsx";
import useGetAdminUsers from "../../../../hooks/admin/useGetAdminUsers.ts";
import NotFound from "../../../ui/NotFound.tsx";
import AdminUsersTable from "./AdminUsersTable.tsx";
import Chip from "@mui/material/Chip";

const AdminUsers = () => {
  const {data, isPending} = useGetAdminUsers()
  if (isPending) return <LoadingSpinner/>
  console.log(data)
  return (
    <Box>
      <Typography sx={{fontSize: '30px', fontWeight: 'bold'}}>
        Users
      </Typography>
      <Typography sx={{color: '#595959'}}>
        Manage all users on the platforms
      </Typography>
      <Box sx={{mb: '20px', mt: '20px', p: '10px', border: '1px solid #eee', borderRadius: '10px'}}>
        <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <Typography sx={{
            fontWeight: 600,
            borderRadius: "8px",
            textTransform: 'capitalize'
          }}>All Users</Typography>
          <Chip label={data?.length} sx={{
            fontWeight: 600,
            borderRadius: "8px",
            textTransform: 'capitalize',
            bgcolor: '#F3E8FF',
            color: '#7E22CE',
            border: '1px solid #D8B4FE',
            height: 'auto',
            py: '3px'
          }}/>
        </Box>
      </Box>
      {data.length ?
        <AdminUsersTable users={data}/> : <NotFound message={'No users have been registered yet'}/>
      }
    </Box>
  );
};

export default AdminUsers;