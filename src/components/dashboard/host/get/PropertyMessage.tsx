import {Box, Typography} from "@mui/material";

interface Props {
  status: string,
  rejectReason?: string
}

const PropertyMessage = ({status, rejectReason}: Props) => {
  return status === "pending" ? (
    <Box sx={{mx: '10px', my: '20px', borderRadius: '10px', p: "10px", bgcolor: "#FDE6BD", color: "#C97A14"}}>
      <Typography sx={{fontWeight: 500, fontSize: '13px'}}>
        Your property is under review. We'll notify you once it's approved.
      </Typography>
    </Box>
  ) : status === "rejected" ? (
    <Box sx={{mx: '10px', my: '20px', borderRadius: '10px', p: "10px", bgcolor: '#FCDDDD', color: '#C62828'}}>
      <Typography sx={{fontWeight: 500}}>Reason:</Typography>
      {rejectReason && <Typography sx={{fontWeight: 500, fontSize: '13px'}}>{rejectReason}</Typography>}
    </Box>
  ) : <Box sx={{mx: '10px', my: '20px', borderRadius: '10px', p: "10px", bgcolor: "#CDF9D7", color: "#2E9B45"}}>
    <Typography sx={{fontWeight: 500, fontSize: '13px'}}>
      Congratulations! Your property has been approved and is now visible to guests.
    </Typography>
  </Box>;
};
export default PropertyMessage;