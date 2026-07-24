import {Box} from "@mui/material";
import MyReviewsFilter from "../../../ui/MyReviewsFilter.tsx";
import {useState} from "react";
import type {SelectChangeEvent} from "@mui/material/Select";
import useGetMyReviews from "../../../../hooks/user/useGetMyReviews.ts";
import LoadingSpinner from "../../../../svg/LoadingSpinner.tsx";
import type {UserReview} from "../../../../interfaces";
import ReviewsCard from "../../../ui/ReviewsCard.tsx";
import HeaderInfo from "../../../ui/HeaderInfo.tsx";
import NotFound from "../../../ui/NotFound.tsx";

const MyReviews = () => {
  // Handle Reviews Filtration
  const [sortOption, setSortOption] = useState('-createdAt');
  const handleSortOptionChange = (event: SelectChangeEvent) => {
    setSortOption(event.target.value as string);
  };
  const {data, isPending} = useGetMyReviews({sortBy: sortOption})
  if (isPending) return <LoadingSpinner/>
  return (
    <Box>
      <HeaderInfo title={'My reviews'} description={"Reviews you've written for properties you've stayed in"}/>
      <MyReviewsFilter handleSortOptionChange={handleSortOptionChange} sortOption={sortOption}
                       reviews={data.length ?? 0}/>
      <Box sx={{mt: '30px'}}>
        {data.length > 0 ? data.map((review: UserReview) => <ReviewsCard key={review._id} review={review}/>) :
          <NotFound message={'No reviews have been added yet'}/>}
      </Box>
    </Box>
  );
};

export default MyReviews;