import {Box} from "@mui/material";
import {useState} from "react";
import type {SelectChangeEvent} from "@mui/material/Select";
import LoadingSpinner from "../../../../svg/LoadingSpinner.tsx";
import type {UserReview} from "../../../../interfaces";
import MyReviewsFilter from "../../../ui/MyReviewsFilter.tsx";
import ReviewsCard from "../../../ui/ReviewsCard.tsx";
import useGetHostReviews from "../../../../hooks/host/useGetHostReviews.ts";
import NotFound from "../../../ui/NotFound.tsx";
import HeaderInfo from "../../../ui/HeaderInfo.tsx";

const MyReviews = () => {
  // Handle Reviews Filtration
  const [sortOption, setSortOption] = useState('-createdAt');
  const handleSortOptionChange = (event: SelectChangeEvent) => {
    setSortOption(event.target.value as string);
  };
  const {data, isPending} = useGetHostReviews({sortBy: sortOption})
  if (isPending) return <LoadingSpinner/>
  return (
    <Box>
      <HeaderInfo
        title="Property Reviews"
        description="View reviews from guests who stayed at your properties."
      />
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