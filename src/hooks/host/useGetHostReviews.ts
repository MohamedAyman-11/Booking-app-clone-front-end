import {useQuery} from "@tanstack/react-query";
import {QUERY_KEYS} from "../../constants";
import {getHostReviews} from "../../api/review.ts";

interface FilterOptions {
  sortBy: string
}

const useGetHostReviews = ({sortBy}: FilterOptions) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.hostReviews, sortBy],
    queryFn: () => getHostReviews({sortBy})
  })
}
export default useGetHostReviews