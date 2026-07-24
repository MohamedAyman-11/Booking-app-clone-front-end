import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import type {User} from "../../../../interfaces";
import {Box, Typography} from "@mui/material";
import Avatar from "../../../layout/Avatar.tsx";
import Chip from "@mui/material/Chip";
import AdminUsersActions from "./AdminUsersActions.tsx";

const head = ['USER', 'EMAIL', 'ROLE', 'STATUS', 'PROVIDER', 'JOINED', 'Actions']

const renderRoleColors = (role: string) => {
  if (role === 'user') return {bg: "#EEF2FF", color: "#4F46E5", border: "#C7D2FE"}
  else if (role === 'host') return {bg: "#FFF7ED", color: "#EA580C", border: "#FED7AA"}
  return {bg: "#F3E8FF", color: "#7E22CE", border: "#D8B4FE"}
}

const renderStatusColors = (active: boolean) => {
  if (active) {
    return {
      bg: "#ECFDF3",
      color: "#027A48",
      border: "#ABEFC6",
    };
  }

  return {
    bg: "#FEF3F2",
    color: "#B42318",
    border: "#FECDCA",
  };
};

interface Props {
  users: User[]
}

const AdminUsersTable = ({users}: Props) => {
  return (
    <TableContainer sx={{borderRadius: '12px', boxShadow: '0 0 10px #eee'}}>
      <Table sx={{minWidth: 650, border: '1px solid #eee'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            {head.map(el => <TableCell key={el} align="left">{el}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user._id}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell component="th" scope="row">
                <Box sx={{display: 'flex', alignItems: 'center', gap: '30px', width: '100%'}}>
                  <Avatar user={user}/>
                  <Typography sx={{color: '#1A1A1A', fontWeight: 500, fontSize: '16px'}}>
                    {user.name}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align={'left'}>
                <Typography sx={{color: '#595959', fontWeight: 500, fontSize: '15px'}}>
                  {user.email}
                </Typography>
              </TableCell>
              <TableCell align={'left'}>
                <Chip label={user.role} sx={{
                  bgcolor: renderRoleColors(user.role).bg,
                  color: renderRoleColors(user.role).color,
                  border: `1px solid ${renderRoleColors(user.role).border}`,
                  fontWeight: 600,
                  borderRadius: "8px",
                  textTransform: 'capitalize'
                }}/>
              </TableCell>
              <TableCell align={'left'}>
                <Chip label={user.active ? 'Active' : 'Inactive'} sx={{
                  bgcolor: renderStatusColors(user.active).bg,
                  color: renderStatusColors(user.active).color,
                  border: `1px solid ${renderStatusColors(user.active).border}`,
                  fontWeight: 600,
                  borderRadius: "8px",
                  textTransform: 'capitalize'
                }}/>
              </TableCell>
              <TableCell align={'left'}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                  <Box component={'img'} sx={{width: '26px'}}
                       src={`/public/img/${user.provider === 'google' ? 'google.svg' : 'gmail.svg'}`}/>
                  <Typography sx={{color: '#595959', fontWeight: 500, fontSize: '15px', textTransform: "capitalize"}}>
                    {user.provider}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="left">{new Date(user.createdAt).toLocaleDateString("en-GB")}</TableCell>
              <TableCell align={'left'}><AdminUsersActions user={user}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminUsersTable
