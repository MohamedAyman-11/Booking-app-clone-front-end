import {useQuery} from "@tanstack/react-query";
import {QUERY_KEYS} from "../../constants";
import {getReviews} from "../../api/review.ts";

interface FilterOptions {
  sortBy: string
}

const useGetAdminReviews = ({sortBy}: FilterOptions) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.adminReviews, sortBy],
    queryFn: () => getReviews({sortBy})
  })
}
export default useGetAdminReviews