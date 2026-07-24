import {useQuery} from "@tanstack/react-query";
import {getProperties} from "../../api/property.ts";
import {QUERY_KEYS} from "../../constants";

const useGetProperties = () => {
  return useQuery({
    queryFn: getProperties,
    queryKey: QUERY_KEYS.globalProperties,
    retry: false
  })
}

export default useGetProperties