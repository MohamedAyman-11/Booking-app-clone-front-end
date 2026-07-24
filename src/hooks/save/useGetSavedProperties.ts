import {useQuery} from "@tanstack/react-query";
import {getSavedProperties} from "../../api/save.ts";
import {QUERY_KEYS} from "../../constants";

const useGetSavedProperties = () => {
  return useQuery({
    queryFn: getSavedProperties,
    queryKey: QUERY_KEYS.savedProperties,
    retry: false
  })
}

export default useGetSavedProperties;