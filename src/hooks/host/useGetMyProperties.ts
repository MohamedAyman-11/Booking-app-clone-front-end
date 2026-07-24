import {useQuery} from "@tanstack/react-query";
import {getMyProperties} from "../../api/host.ts";
import {QUERY_KEYS} from "../../constants";

interface UseGetMyProperties {
  status: string,
  sortBy: string
}

const useGetMyProperties = ({status, sortBy}: UseGetMyProperties) => {
  return useQuery({
    queryFn: () => getMyProperties({status, sortBy}),
    queryKey: [...QUERY_KEYS.myProperties, status, sortBy],
    retry: false
  })
}

export default useGetMyProperties;