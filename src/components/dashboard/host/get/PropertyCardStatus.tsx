import {Box, Typography} from "@mui/material";
import theme from "../../../../config/mui.config.ts";
import {renderColor} from "../../../../utils/functions.ts";


const PropertyCardStatus = ({status, discount}: { status: string, discount?: number }) => {
  return (
    <Box sx={{
      position: 'absolute',
      top: '10px',
      left: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      px: '10px'
    }}>
      <Typography component={'span'} sx={{
        bgcolor: renderColor(status).bg,
        color: renderColor(status).color,
        p: '4px 20px',
        borderRadius: '10px',
        zIndex: 90,
        textTransform: 'capitalize'
      }}>{status}</Typography>
      {
        discount && discount > 0 ?
          <Typography component={'span'} sx={{
            bgcolor: theme.palette.error.light,
            color: theme.palette.error.contrastText,
            p: '4px 10px',
            borderRadius: '10px',
            zIndex: 90,
            textTransform: 'capitalize'
          }}>-{discount}%</Typography> : null
      }
    </Box>
  );
};

export default PropertyCardStatus;