import {Box, Divider} from "@mui/material";
import ReviewOverAll from "./ReviewOverAll.tsx";
import ReviewsCategory from "./ReviewsCategory.tsx";
import PropertyReviews from "./PropertyReviews.tsx";
import type {Property} from "../../../interfaces";
import NotFound from "../../ui/NotFound.tsx";

interface Props {
  stats: {
    _id: string,
    overAllRating: number,
    cleanliness: number,
    location: number,
    accuracy: number,
    check_in: number,
    communication: number,
    value: number,
    ratingsQuantity: number,
  }[],
  property: Property
}

const PropertyReviewsInfo = ({stats, property}: Props) => {

  return (
    <Box sx={{
      py: '30px',
      borderTop: '1.5px solid #ccc'
    }}>
      {stats.length > 0 ?
        <>
          <ReviewOverAll overAllRating={stats[0].overAllRating}/>
          <ReviewsCategory stats={stats[0]}/>
          <Divider/>
          <PropertyReviews property={property}/>
        </>
        : <NotFound message={'No Reviews Exist For This Property!'}/>
      }
    </Box>
  );
};

export default PropertyReviewsInfo;
