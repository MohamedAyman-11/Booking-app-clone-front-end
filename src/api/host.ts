import {propertiesInstance} from "../lib/axios.ts";

interface GetMyPropertiesParams {
  status: string,
  sortBy: string
}

interface UpdatePropertyParams {
  id: string;
  propertyData: FormData;
}

interface DeletePropertyParams {
  id: string;
}

export const createProperty = async (propertyData: FormData) => {
  const {data} = await propertiesInstance.post('/', propertyData);
  return data;
}
export const getMyProperties = async ({status, sortBy}: GetMyPropertiesParams) => {
  const params = {
    sort: sortBy,
    ...(status !== 'all' && {status})
  }
  const {data} = await propertiesInstance.get('/me', {params})
  return data.data;
}
export const updateProperty = async ({propertyData, id}: UpdatePropertyParams) => {
  const {data} = await propertiesInstance.patch(`/${id}`, propertyData);
  return data;
}
export const deleteProperty = async ({id}: DeletePropertyParams) => {
  const {data} = await propertiesInstance.delete(`/${id}`);
  return data;
}