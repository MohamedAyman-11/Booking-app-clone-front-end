import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import type {Property} from "../../../../interfaces";
import {MapPin} from "lucide-react";
import {Box, Stack, Typography} from "@mui/material";
import {renderColor, textSlice} from "../../../../utils/functions.ts";
import Avatar from "../../../layout/Avatar.tsx";
import PropertiesRequestActions from "./PropertiesRequestActions.tsx";

const head = ['Property', 'Host', 'Location', 'Status', 'Created At', 'Actions']

interface Props {
  properties: Property[]
}

const PropertiesRequestTable = ({properties}: Props) => {
  return (
    <TableContainer sx={{borderRadius: '12px', boxShadow: '0 0 10px #eee'}}>
      <Table sx={{minWidth: 650, border: '1px solid #eee'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            {head.map(el => <TableCell key={el} align={el === 'Actions' ? 'center' : 'left'}>{el}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {properties.map((property) => (
            <TableRow
              key={property._id}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell component="th" scope="row">
                <Box sx={{display: 'flex', alignItems: 'center', gap: '30px', width: '100%'}}>
                  <Box component={'img'} src={property.images[0].url} sx={{width: '80px', borderRadius: '8px'}}/>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    <Typography sx={{color: '#1A1A1A', fontWeight: 500, fontSize: '16px'}}>
                      {textSlice(property.name, 25)}
                    </Typography>
                    <Typography sx={{color: '#595959', fontSize: '13px'}}>
                      {property.propertyType}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell align="left">
                <Stack direction={'row'} sx={{alignItems: 'center', gap: '5px'}}>
                  <Avatar user={property?.host}/>
                  <Typography sx={{fontSize: '16px', fontWeight: 500}}>{property.host?.name}</Typography>
                </Stack>
              </TableCell>
              <TableCell align="left">
                <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'row', color: '#595959'}}>
                  <MapPin size={15}/>{property.location.city},{property.location.country}
                </Box>
              </TableCell>
              <TableCell align="left">
                <Box sx={{
                  bgcolor: renderColor(property.status).bg,
                  color: renderColor(property.status).color,
                  p: '4px 12px',
                  display: 'block',
                  width: 'fit-content',
                  borderRadius: '8px',
                  textTransform: 'capitalize',
                  fontWeight: 500
                }}>
                  {property.status}</Box></TableCell>
              <TableCell align="left">{new Date(property.createdAt).toLocaleDateString("en-GB")}</TableCell>
              <TableCell align="center"><PropertiesRequestActions property={property}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PropertiesRequestTable
