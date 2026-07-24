import {useMutation} from "@tanstack/react-query";
import {activateAccount} from "../../api/auth.ts";

const useActivateAccount = () => {
  return useMutation({
    mutationFn: activateAccount
  })
}
export default useActivateAccount