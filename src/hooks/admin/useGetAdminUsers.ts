import {useQuery} from "@tanstack/react-query";
import {getAdminUsers} from "../../api/admin.ts";
import {QUERY_KEYS} from "../../constants";


const useGetAdminUsers = () => {
  return useQuery({
    queryKey: QUERY_KEYS.adminUsers,
    queryFn: () => getAdminUsers(),
  })
}

export default useGetAdminUsers;