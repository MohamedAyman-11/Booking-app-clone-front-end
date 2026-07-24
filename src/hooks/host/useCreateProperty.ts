import {useMutation} from "@tanstack/react-query";
import {createProperty} from "../../api/host.ts";

const useCreateProperty = () => {
  return useMutation({
    mutationFn: createProperty
  })
}
export default useCreateProperty;