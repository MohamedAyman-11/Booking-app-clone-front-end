import {useMutation} from "@tanstack/react-query";
import {unsaveProperty} from "../../api/save.ts";

const useUnsaveProperty = () => {
  return useMutation({
    mutationFn: unsaveProperty
  })
}
export default useUnsaveProperty;