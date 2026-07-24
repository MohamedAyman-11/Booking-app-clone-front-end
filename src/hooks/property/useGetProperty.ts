import {useQuery} from "@tanstack/react-query";
import {getProperty} from "../../api/property.ts";
import {QUERY_KEYS} from "../../constants";

const useGetProperty = (id: string) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.property, id],
    queryFn: () => getProperty(id),
    retry: false,
    enabled: !!id
  })
}
export default useGetProperty;