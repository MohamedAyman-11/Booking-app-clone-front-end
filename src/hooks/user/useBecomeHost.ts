import {useMutation} from "@tanstack/react-query";
import {becomeHost} from "../../api/user.ts";

const useBecomeHost = () => {
  return useMutation({
    mutationFn: becomeHost
  })
}
export default useBecomeHost