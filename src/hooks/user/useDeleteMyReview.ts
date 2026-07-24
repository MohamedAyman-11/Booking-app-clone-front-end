import {useMutation} from "@tanstack/react-query";
import {deleteReview} from "../../api/review.ts";

const useDeleteMyReview = () => {
  return useMutation({
    mutationFn: deleteReview
  })
}
export default useDeleteMyReview