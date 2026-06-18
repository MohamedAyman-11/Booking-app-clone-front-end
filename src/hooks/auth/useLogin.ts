import {useMutation} from "@tanstack/react-query";
import {login} from "../../api/auth.ts";

const useLogin = () => {
  return useMutation({
    mutationFn: login
  })
}
export default useLogin