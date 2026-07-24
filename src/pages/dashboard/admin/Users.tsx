import AdminUsers from "../../../components/dashboard/admin/users/AdminUsers.tsx";
import {Box} from "@mui/material";

const Users = () => {
  return (
    <Box sx={{py: '20px', px: '20px'}}>
      <AdminUsers/>
    </Box>
  );
};

export default Users;