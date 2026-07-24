import {Box, type SelectChangeEvent} from "@mui/material";
import {useState} from "react";
import useGetAdminReviews from "../../../../hooks/admin/useGetAdminReviews.ts";
import MyReviewsFilter from "../../../ui/MyReviewsFilter.tsx";
import LoadingSpinner from "../../../../svg/LoadingSpinner.tsx";
import type {UserReview} from "../../../../interfaces";
import ReviewsCard from "../../../ui/ReviewsCard.tsx";
import NotFound from "../../../ui/NotFound.tsx";
import HeaderInfo from "../../../ui/HeaderInfo.tsx";

const MyReviews = () => {
  // Handle Reviews Filtration
  const [sortOption, setSortOption] = useState('-createdAt');
  const handleSortOptionChange = (event: SelectChangeEvent) => {
    setSortOption(event.target.value as string);
  };
  const {data, isPending} = useGetAdminReviews({sortBy: sortOption})
  if (isPending) return <LoadingSpinner/>
  return (
    <Box>
      <HeaderInfo
        title="Review Management"
        description="Monitor, review, and manage all user reviews across the platform."
      />
      {data.length > 0 ?
        <>
          <MyReviewsFilter handleSortOptionChange={handleSortOptionChange} sortOption={sortOption}
                           reviews={data.length ?? 0}/>
          <Box sx={{mt: '30px'}}>
            {data.map((review: UserReview) => <ReviewsCard key={review._id} review={review}/>)}
          </Box>
        </>
        : <NotFound message={'No reviews have been added yet'}/>}
    </Box>
  );
}

export default MyReviews
