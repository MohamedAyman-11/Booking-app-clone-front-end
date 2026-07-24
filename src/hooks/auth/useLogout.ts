import {useMutation} from "@tanstack/react-query";
import {logout} from "../../api/auth.ts";

const useLogout = () => {
  return useMutation({
    mutationFn: logout
  })
}
export default useLogout