import {useMutation} from "@tanstack/react-query";
import {changePropertyStatus} from "../../api/admin.ts";

const useUpdatePropertyStatus = () => {
  return useMutation({
    mutationFn: changePropertyStatus
  })
}

export default useUpdatePropertyStatus