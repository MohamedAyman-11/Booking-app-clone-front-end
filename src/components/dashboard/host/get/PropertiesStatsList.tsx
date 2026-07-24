import Grid from "@mui/material/Grid";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import PropertyStatsCard from "../../../ui/PropertyStatsCard.tsx";
import {VerifiedUser} from "@mui/icons-material";

interface Props {
  stats: {
    pending: number
    accepted: number
    rejected: number
    total: number
  }
}

const PropertiesStatsList = ({stats: {accepted, total, pending, rejected}}: Props) => {
  return (
    <Grid container spacing={3} sx={{mt: '20px'}}>
      <Grid size={{xs: 12, sm: 6, md: 6, lg: 6, xl: 4, bigXl: 3}}>
        <PropertyStatsCard
          value={accepted}
          title="Accepted"
          color="success"
          mainIcon={<HomeRoundedIcon fontSize={'medium'} color={'success'}/>}
          secondaryIcon={<VerifiedUser color={'success'} fontSize={'large'}/>}
        />
      </Grid>

      <Grid size={{xs: 12, sm: 6, md: 6, lg: 6, xl: 4, bigXl: 3}}>
        <PropertyStatsCard
          value={pending}
          title="Pending"
          color="warning"
          mainIcon={<HomeRoundedIcon fontSize={'medium'} color={'warning'}/>}
          secondaryIcon={<ScheduleRoundedIcon color={'warning'} fontSize={'large'}/>}
        />
      </Grid>

      <Grid size={{xs: 12, sm: 6, md: 6, lg: 6, xl: 4, bigXl: 3}}>
        <PropertyStatsCard
          value={rejected}
          title="Rejected"
          color="error"
          mainIcon={<HomeRoundedIcon fontSize={'medium'} color={'error'}/>}
          secondaryIcon={<CancelRoundedIcon color={'error'} fontSize={'large'}/>}
        />
      </Grid>
      <Grid size={{xs: 12, sm: 6, md: 6, lg: 6, xl: 4, bigXl: 3}}>
        <PropertyStatsCard
          value={total}
          title="Total"
          color="primary"
          mainIcon={<ApartmentRoundedIcon color={'primary'}/>}
          secondaryIcon={<ApartmentRoundedIcon color={'primary'} fontSize={'large'}/>}
        />
      </Grid>
    </Grid>
  );
};

export default PropertiesStatsList;