import {useMutation} from "@tanstack/react-query";
import {saveProperty} from "../../api/save.ts";

const useSaveProperty = () => {
  return useMutation(
    {
      mutationFn: saveProperty
    }
  )
}
export default useSaveProperty