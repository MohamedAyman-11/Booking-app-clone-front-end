import {useMutation} from "@tanstack/react-query";
import {createReview} from "../../api/property.ts";

const useCreateReview = () => {
  return useMutation({
    mutationFn: createReview
  })
}

export default useCreateReview;