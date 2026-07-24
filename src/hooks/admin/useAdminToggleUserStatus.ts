import {useMutation} from "@tanstack/react-query";
import {adminToggleUserStatus} from "../../api/admin.ts";

const useAdminToggleUserStatus = () => {
  return useMutation({
    mutationFn: adminToggleUserStatus,
    retry: false,
  })
}
export default useAdminToggleUserStatus;