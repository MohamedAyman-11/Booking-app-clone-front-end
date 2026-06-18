import {createBrowserRouter, createRoutesFromElements, Route,} from 'react-router-dom';
import Layout from '../pages/Layout';
import Register from "../pages/Register.tsx";
import Home from "../pages/Home.tsx";
import Login from "../pages/Login.tsx";
import Recover from "../pages/Recover.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={'/'} element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path={'/register'} element={<Register/>}/>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/recovery-email'} element={<Recover/>}/>
    </Route>),
);
export default router;
