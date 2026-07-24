import {useMutation} from "@tanstack/react-query";
import {updateMyData} from "../../api/user.ts";

const useUpdateMyData = () => {
  return useMutation({
    mutationFn: updateMyData
  })
}
export default useUpdateMyData