import {propertiesInstance} from "../lib/axios.ts";

interface CreateReview {
  propertyId: string,
  reviewData: {
    overAllRating: number,
    categories: {
      cleanliness: number
      accuracy: number
      check_in: number
      communication: number
      location: number
      value: number
    },
    message: string
  }
}

export const getProperties = async () => {
  const {data} = await propertiesInstance.get('/')
  return data.data.properties;
}

export const getProperty = async (id: string) => {
  const {data} = await propertiesInstance.get(`/${id}`)
  return data.data.property;
}

export const createReview = async ({propertyId, reviewData}: CreateReview) => {
  const {data} = await propertiesInstance.post(`/${propertyId}/reviews`, reviewData);
  return data
}