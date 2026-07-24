import {adminInstance} from "../lib/axios.ts";

interface FilterSortParams {
  status: string;
  sortBy: string;
}

interface PropertyStatus {
  status: string,
  id: string,
  rejectReason?: string
}

export const getAdminStats = async () => {
  const response = await adminInstance.get('stats')
  return response.data.data.stats
}
export const getAdminProperties = async ({status, sortBy}: FilterSortParams) => {
  const params = {
    sort: sortBy,
    ...(status !== 'all' && {status})
  }
  const response = await adminInstance.get('properties', {params})
  return response.data.data.properties
}

export const getAdminUsers = async () => {
  const response = await adminInstance.get('users')
  return response.data.data.users
}
export const adminToggleUserStatus = async (id: string) => {
  const {data} = await adminInstance.patch(`/users/${id}/toggleStatus`);
  return data
}
export const adminPropertiesRequest = async () => {
  const params = {
    sort: '-createdAt',
    status: 'pending'
  }
  const {data} = await adminInstance.get('properties', {params})
  return data.data.properties
}
export const changePropertyStatus = async ({status, id, rejectReason}: PropertyStatus) => {
  const {data} = await adminInstance.patch(`/properties/${id}/status`, {status, rejectReason})
  return data
}