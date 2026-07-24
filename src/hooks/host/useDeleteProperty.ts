import {useMutation} from "@tanstack/react-query";
import {deleteProperty} from "../../api/host.ts";

const useDeleteProperty = () => {
  return useMutation({
    mutationFn: deleteProperty,
  })
}

export default useDeleteProperty;