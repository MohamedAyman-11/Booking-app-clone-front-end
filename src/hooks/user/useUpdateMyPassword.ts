import {useMutation} from "@tanstack/react-query";
import {updateMyPassword} from "../../api/user.ts";

const useUpdateMyPassword = () => {
  return useMutation({
    mutationFn: updateMyPassword
  })
}

export default useUpdateMyPassword