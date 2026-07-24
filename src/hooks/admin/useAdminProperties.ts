import {useQuery} from "@tanstack/react-query";
import {getAdminProperties} from "../../api/admin.ts";
import {QUERY_KEYS} from "../../constants";

interface UseAdminPropertiesParams {
  status: string;
  sortBy: string;
}

const useAdminProperties = ({status, sortBy}: UseAdminPropertiesParams) => {
  return useQuery({
    queryFn: () => getAdminProperties({status, sortBy}),
    queryKey: [...QUERY_KEYS.adminProperties, status, sortBy],
    retry: false
  })
}

export default useAdminProperties