import type {User} from "../../interfaces";
import CustomToaster from "../../components/ui/CustomToaster.tsx";
import ResponsiveAppBar from "../../components/layout/ResponsiveAppBar.tsx";
import {Outlet} from "react-router-dom";

interface Props {
  user: User
}

const DashboardLayout = ({user}: Props) => {
  return (
    <>
      <ResponsiveAppBar user={user}><Outlet/></ResponsiveAppBar>
      <CustomToaster/>
    </>
  );
};
export default DashboardLayout;
