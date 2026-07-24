import {useQuery} from "@tanstack/react-query";
import {adminPropertiesRequest} from "../../api/admin.ts";
import {QUERY_KEYS} from "../../constants";

const useGetPropertiesRequest = () => {
  return useQuery({
    queryFn: adminPropertiesRequest,
    queryKey: QUERY_KEYS.propertiesRequest
  })
}

export default useGetPropertiesRequest;