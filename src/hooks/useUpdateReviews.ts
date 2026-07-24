import {useMutation} from "@tanstack/react-query";
import {updateReview} from "../api/review.ts";

const useUpdateReviews = () => {
  return useMutation({
    mutationFn: updateReview
  })
}

export default useUpdateReviews