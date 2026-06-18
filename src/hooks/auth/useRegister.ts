import {useMutation} from "@tanstack/react-query";
import {register} from "../../api/auth.ts";

const useRegister = () => {
  return useMutation({
    mutationFn: register
  })
}
export default useRegister