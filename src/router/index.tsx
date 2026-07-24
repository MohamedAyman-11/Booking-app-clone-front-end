import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from 'react-router-dom';
import MainLayout from '../pages/Layout';
import Register from "../pages/auth/Register.tsx";
import Home from "../pages/Home.tsx";
import Login from "../pages/auth/Login.tsx";
import ResetPassword from "../pages/auth/ResetPassword.tsx";
import useCurrentUser from "../hooks/user/useCurrentUser.ts";
import ProtectedRoutes from "../auth/ProtectedRoutes.tsx";
import ForgotPassword from "../pages/auth/ForgotPassword.tsx";
import SendOTP from "../pages/auth/SendOTP.tsx";
import ActivateAccount from "../pages/auth/ActivateAccount.tsx";
import PropertyDetails from "../pages/PropertyDetails.tsx";
import SavedProperties from "../pages/dashboard/SavedProperties.tsx";
import DashboardLayout from "../pages/dashboard/DashboardLayout.tsx";
import UpdateData from "../pages/dashboard/UpdateData.tsx";
import PasswordUpdate from "../pages/dashboard/PasswordUpdate.tsx";
import MyAccount from "../pages/dashboard/MyAccount.tsx";
import AddProperty from "../pages/dashboard/host/AddProperty.tsx";
import HostProperties from "../pages/dashboard/host/HostProperties.tsx";
import Stats from "../pages/dashboard/admin/Stats.tsx";
import Properties from "../pages/dashboard/admin/Properties.tsx";
import LoadingSpinner from "../svg/LoadingSpinner.tsx";
import {ROUTES_PATHS_DATA} from "../constants";
import Users from "../pages/dashboard/admin/Users.tsx";
import PropertiesRequest from "../pages/dashboard/admin/PropertiesRequest.tsx";
import PaymentSuccess from "../pages/PaymentSuccess.tsx";
import PaymentCancel from "../pages/PaymentCancel.tsx";
import UserReviews from "../pages/dashboard/user/UserReviews.tsx";
import HostReviews from "../pages/dashboard/host/HostReviews.tsx";
import AdminReviews from "../pages/dashboard/admin/AdminReviews.tsx";
import Bookings from "../pages/dashboard/Bookings.tsx";
import Show from "../pages/dashboard/show-property/Show.tsx";

const Router = () => {
  const {data, isPending} = useCurrentUser()
  const user = data?.user
  if (isPending) return <LoadingSpinner/>
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path={ROUTES_PATHS_DATA.home} element={<MainLayout user={user}/>}>
          <Route index element={
            <ProtectedRoutes user={user?.role !== 'admin'}
                             redirectPath={ROUTES_PATHS_DATA.dashboard}><Home
              user={user}/></ProtectedRoutes>
          }/>
          <Route path={ROUTES_PATHS_DATA.propertyDetails}
                 element={<ProtectedRoutes user={user?.role !== 'admin'}
                                           redirectPath={ROUTES_PATHS_DATA.dashboard}>
                   <PropertyDetails/></ProtectedRoutes>}/>
          <Route path={ROUTES_PATHS_DATA.showProperty} element={
            <ProtectedRoutes user={user && user?.role == 'admin'} redirectPath={ROUTES_PATHS_DATA.login}>
              <Show/>
            </ProtectedRoutes>
          }/>
          <Route path={ROUTES_PATHS_DATA.register} element={
            <ProtectedRoutes user={!user} redirectPath={ROUTES_PATHS_DATA.home}>
              <Register/>
            </ProtectedRoutes>
          }/>
          <Route path={ROUTES_PATHS_DATA.login} element={
            <ProtectedRoutes user={!user} redirectPath={ROUTES_PATHS_DATA.home}>
              <Login/>
            </ProtectedRoutes>
          }/>
          <Route path={ROUTES_PATHS_DATA.recoveryEmail} element={
            <ProtectedRoutes user={!user} redirectPath={ROUTES_PATHS_DATA.home}>
              <ForgotPassword/>
            </ProtectedRoutes>
          }/>
          <Route path={ROUTES_PATHS_DATA.resetPassword} element={
            <ProtectedRoutes user={!user} redirectPath={ROUTES_PATHS_DATA.home}>
              <ResetPassword/>
            </ProtectedRoutes>
          }/>
          <Route path={ROUTES_PATHS_DATA.restoreAccount} element={
            <ProtectedRoutes user={!user} redirectPath={ROUTES_PATHS_DATA.home}>
              <SendOTP/>
            </ProtectedRoutes>
          }/>
          <Route path={ROUTES_PATHS_DATA.activateAccount} element={
            <ProtectedRoutes user={!user} redirectPath={ROUTES_PATHS_DATA.home}>
              <ActivateAccount/>
            </ProtectedRoutes>
          }/>
          <Route path={ROUTES_PATHS_DATA.paymentSuccess} element={
            <ProtectedRoutes user={user} redirectPath={ROUTES_PATHS_DATA.login}>
              <PaymentSuccess/>
            </ProtectedRoutes>
          }/>
          <Route path={ROUTES_PATHS_DATA.paymentCancel} element={
            <ProtectedRoutes user={user} redirectPath={ROUTES_PATHS_DATA.login}>
              <PaymentCancel/>
            </ProtectedRoutes>
          }/>
        </Route>
        {/*Dashboard*/}
        <Route
          path={ROUTES_PATHS_DATA.dashboard}
          element={
            <ProtectedRoutes user={user} redirectPath={ROUTES_PATHS_DATA.login}>
              <DashboardLayout user={user}/>
            </ProtectedRoutes>
          }>
          <Route index element={<MyAccount role={user?.role} name={user?.name}/>}/>
          <Route
            path={ROUTES_PATHS_DATA.personalDetails}
            element={
              <ProtectedRoutes user={user} redirectPath={ROUTES_PATHS_DATA.login}>
                <UpdateData/>
              </ProtectedRoutes>
            }
          />
          <Route
            path={ROUTES_PATHS_DATA.updatePassword}
            element={
              <ProtectedRoutes user={user} redirectPath={ROUTES_PATHS_DATA.login}>
                <PasswordUpdate/>
              </ProtectedRoutes>
            }
          />
          <Route
            path={ROUTES_PATHS_DATA.userReviews}
            element={
              <ProtectedRoutes user={user} redirectPath={ROUTES_PATHS_DATA.login}>
                <UserReviews/>
              </ProtectedRoutes>
            }
          />
          <Route
            path={ROUTES_PATHS_DATA.reservations}
            element={
              <ProtectedRoutes user={user} redirectPath={ROUTES_PATHS_DATA.login}>
                <Bookings/>
              </ProtectedRoutes>
            }
          />

          <Route path={ROUTES_PATHS_DATA.myWishlist} element={
            <ProtectedRoutes user={user && user?.role !== 'admin'} redirectPath={ROUTES_PATHS_DATA.login}>
              <SavedProperties/>
            </ProtectedRoutes>
          }/>
          <Route path={ROUTES_PATHS_DATA.addProperty} element={
            <ProtectedRoutes user={user && user?.role === 'host'} redirectPath={ROUTES_PATHS_DATA.login}>
              <AddProperty/>
            </ProtectedRoutes>
          }/>
          <Route path={ROUTES_PATHS_DATA.myProperties} element={
            <ProtectedRoutes user={user && user?.role === 'host'} redirectPath={ROUTES_PATHS_DATA.login}>
              <HostProperties/>
            </ProtectedRoutes>
          }/>
          <Route
            path={ROUTES_PATHS_DATA.hostReviews}
            element={
              <ProtectedRoutes user={user && user?.role === 'host'} redirectPath={ROUTES_PATHS_DATA.login}>
                <HostReviews/>
              </ProtectedRoutes>
            }
          />
          <Route path={ROUTES_PATHS_DATA.adminStats} element={
            <ProtectedRoutes user={user && user?.role === 'admin'} redirectPath={ROUTES_PATHS_DATA.login}>
              <Stats/>
            </ProtectedRoutes>
          }/>
          <Route path={ROUTES_PATHS_DATA.adminProperties} element={
            <ProtectedRoutes user={user && user?.role === 'admin'} redirectPath={ROUTES_PATHS_DATA.login}>
              <Properties/>
            </ProtectedRoutes>
          }/>
          <Route path={ROUTES_PATHS_DATA.adminUsers} element={
            <ProtectedRoutes user={user && user?.role === 'admin'} redirectPath={ROUTES_PATHS_DATA.login}>
              <Users/>
            </ProtectedRoutes>
          }/>
          <Route path={ROUTES_PATHS_DATA.adminPropertyRequests} element={
            <ProtectedRoutes user={user && user?.role === 'admin'} redirectPath={ROUTES_PATHS_DATA.login}>
              <PropertiesRequest/>
            </ProtectedRoutes>
          }/>
          <Route path={ROUTES_PATHS_DATA.adminReviews} element={
            <ProtectedRoutes user={user && user?.role === 'admin'} redirectPath={ROUTES_PATHS_DATA.login}>
              <AdminReviews/>
            </ProtectedRoutes>
          }/>

        </Route>

      </>
    ),
  )
  return <RouterProvider router={router}/>
}
export default Router;
