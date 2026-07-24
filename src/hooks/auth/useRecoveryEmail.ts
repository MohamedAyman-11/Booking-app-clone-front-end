import {useMutation} from "@tanstack/react-query";
import {forgotPassword} from "../../api/auth.ts";

const useRecoveryEmail = () => {
  return useMutation({
    mutationFn: forgotPassword
  })
}
export default useRecoveryEmail;