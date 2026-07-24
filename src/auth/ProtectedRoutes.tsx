import type {ReactNode} from "react";
import {Navigate} from "react-router-dom";

interface Props {
  redirectPath: string,
  children: ReactNode,
  user: boolean
}

const ProtectedRoutes = ({redirectPath, children, user}: Props) => {
  if (!user) return <Navigate to={redirectPath}/>
  return children
}
export default ProtectedRoutes;