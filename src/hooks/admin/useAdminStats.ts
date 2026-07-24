import {useQuery} from "@tanstack/react-query";
import {getAdminStats} from "../../api/admin.ts";
import {QUERY_KEYS} from "../../constants";

const useAdminStats = () => {
  return useQuery({
    queryKey: QUERY_KEYS.adminStats,
    queryFn: getAdminStats,
    retry: false,
  })
}
export default useAdminStats