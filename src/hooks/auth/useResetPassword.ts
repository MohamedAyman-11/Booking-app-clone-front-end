import {useMutation} from "@tanstack/react-query";
import {resetPassword} from "../../api/auth.ts";

const useResetPassword = () => {
  return useMutation({
    mutationFn: resetPassword
  })
}
export default useResetPassword