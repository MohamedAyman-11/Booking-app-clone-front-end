import {useQuery} from "@tanstack/react-query";
import {QUERY_KEYS} from "../../constants";
import {getUserReviews} from "../../api/review.ts";

interface FilterOptions {
  sortBy: string
}

const useGetMyReviews = ({sortBy}: FilterOptions) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.userReviews, sortBy],
    queryFn: () => getUserReviews({sortBy})
  })
}
export default useGetMyReviews