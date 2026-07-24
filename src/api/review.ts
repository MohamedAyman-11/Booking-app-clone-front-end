import {reviewsInstance} from "../lib/axios.ts";

interface ReviewsFilterParams {
  sortBy: string
}

interface ReviewId {
  id: string
}

interface ReviewsCategories {
  cleanliness: number,
  accuracy: number,
  check_in: number,
  communication: number,
  location: number,
  value: number,
}

interface UpdateReview extends ReviewId {
  categories: ReviewsCategories
  overAllRating: number,
  message: string
}

export const getUserReviews = async ({sortBy}: ReviewsFilterParams) => {
  const params = {sort: sortBy}
  const {data} = await reviewsInstance.get('/me', {params})
  return data.data.reviews
}
export const getHostReviews = async ({sortBy}: ReviewsFilterParams) => {
  const params = {sort: sortBy}
  const {data} = await reviewsInstance.get('/host/me', {params})
  return data.data.reviews
}
export const deleteReview = async ({id}: ReviewId) => {
  const {data} = await reviewsInstance.delete(`/${id}`);
  return data
}
export const getReviews = async ({sortBy}: ReviewsFilterParams) => {
  const params = {sort: sortBy};
  const {data} = await reviewsInstance.get('/', {params})
  return data.data.reviews
}
export const updateReview = async ({id, overAllRating, categories, message}: UpdateReview) => {
  const {data} = await reviewsInstance.patch(`/${id}`, {overAllRating, categories, message});
  return data
}