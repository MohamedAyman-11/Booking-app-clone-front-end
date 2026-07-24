import {useMutation} from "@tanstack/react-query";
import {deleteMyAccount} from "../../api/user.ts";

const useDeleteMyAccount = () => {
  return useMutation({
    mutationFn: deleteMyAccount
  })
}
export default useDeleteMyAccount