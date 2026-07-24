import Grid from "@mui/material/Grid";
import PropertyStatsCard from "../../../ui/PropertyStatsCard.tsx";

import {
  AdminPanelSettingsRounded,
  ApartmentRounded,
  CancelRounded,
  GroupsRounded,
  HomeRounded,
  PeopleRounded,
  RateReviewRounded,
  ScheduleRounded,
  ShieldRounded,
  StarRounded,
  SupervisorAccountRounded,
  VerifiedUser,
} from "@mui/icons-material";
import useAdminStats from "../../../../hooks/admin/useAdminStats.ts";
import LoadingSpinner from "../../../../svg/LoadingSpinner.tsx";

const AdminStats = () => {
  const {data, isPending} = useAdminStats()
  if (isPending) return <LoadingSpinner/>
  return (
    <Grid container spacing={3} sx={{mt: "30px"}}>
      <Grid size={{xs: 12, sm: 6, xl: 4, bigXl: 3}}>
        <PropertyStatsCard
          value={data.usersStats.users}
          title="Users"
          color="primary"
          mainIcon={<PeopleRounded color="primary"/>}
          secondaryIcon={<GroupsRounded color="primary" fontSize="large"/>}
        />
      </Grid>

      <Grid size={{xs: 12, sm: 6, xl: 4, bigXl: 3}}>
        <PropertyStatsCard
          value={data.usersStats.hosts}
          title="Hosts"
          color="secondary"
          mainIcon={<SupervisorAccountRounded color="secondary"/>}
          secondaryIcon={
            <AdminPanelSettingsRounded
              color="secondary"
              fontSize="large"
            />
          }
        />
      </Grid>
      <Grid size={{xs: 12, sm: 6, xl: 4, bigXl: 3}}>
        <PropertyStatsCard
          value={data.usersStats.admins}
          title="Admins"
          color="info"
          mainIcon={<AdminPanelSettingsRounded color="info"/>}
          secondaryIcon={<ShieldRounded color="info" fontSize="large"/>}
        />
      </Grid>

      <Grid size={{xs: 12, sm: 6, xl: 4, bigXl: 3}}>
        <PropertyStatsCard
          value={data.propertiesStats.total}
          title="Properties"
          color="success"
          mainIcon={<HomeRounded color="success"/>}
          secondaryIcon={
            <ApartmentRounded color="success" fontSize="large"/>
          }
        />
      </Grid>

      <Grid size={{xs: 12, sm: 6, xl: 4, bigXl: 3}}>
        <PropertyStatsCard
          value={data.propertiesStats.pending}
          title="Pending"
          color="warning"
          mainIcon={<HomeRounded color="warning"/>}
          secondaryIcon={<ScheduleRounded color="warning" fontSize="large"/>}
        />
      </Grid>

      <Grid size={{xs: 12, sm: 6, xl: 4, bigXl: 3}}>
        <PropertyStatsCard
          value={data.propertiesStats.accepted}
          title="Accepted"
          color="success"
          mainIcon={<HomeRounded color="success"/>}
          secondaryIcon={<VerifiedUser color="success" fontSize="large"/>}
        />
      </Grid>

      <Grid size={{xs: 12, sm: 6, xl: 4, bigXl: 3}}>
        <PropertyStatsCard
          value={data.propertiesStats.rejected}
          title="Rejected"
          color="error"
          mainIcon={<HomeRounded color="error"/>}
          secondaryIcon={<CancelRounded color="error" fontSize="large"/>}
        />
      </Grid>

      <Grid size={{xs: 12, sm: 6, xl: 4, bigXl: 3}}>
        <PropertyStatsCard
          value={data.reviewsStats}
          title="Reviews"
          color="info"
          mainIcon={<RateReviewRounded color="info"/>}
          secondaryIcon={<StarRounded color="info" fontSize="large"/>}
        />
      </Grid>
    </Grid>
  );
};

export default AdminStats;