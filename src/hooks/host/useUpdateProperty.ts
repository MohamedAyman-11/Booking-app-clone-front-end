import {useMutation} from "@tanstack/react-query";
import {updateProperty} from "../../api/host.ts";

const useUpdateProperty = () => {
  return useMutation({
    mutationFn: updateProperty
  })
}
export default useUpdateProperty;