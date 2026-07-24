import {savePropertiesInstance} from "../lib/axios.ts";

interface SavePropertyParams {
  property: string
}

export const saveProperty = async ({property}: SavePropertyParams) => {
  const {data} = await savePropertiesInstance.post('/', {property})
  return data
}
export const unsaveProperty = async (savedPropertyId: string) => {
  const {data} = await savePropertiesInstance.delete(`/${savedPropertyId}`)
  return data
}
export const getSavedProperties = async () => {
  const {data} = await savePropertiesInstance.get('/');
  return data.data.properties;
}