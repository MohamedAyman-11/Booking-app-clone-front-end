import useUnsaveProperty from "../save/useUnsaveProperty.ts";
import useSaveProperty from "../save/useSaveProperty.ts";
import toast from "react-hot-toast";
import {handleAxiosError} from "../../utils/functions.ts";
import useInvalidateQueries from "./useInvalidateQueries.ts";
import {QUERY_KEYS} from "../../constants";

const useSavePropertyHandler = () => {
  const {invalidateQueries} = useInvalidateQueries()
  const {mutateAsync, isPending} = useSaveProperty()
  const {mutateAsync: mutateAsyncDelete, isPending: isLoading} = useUnsaveProperty()
  const handleSaving = async (isSaved: boolean, propertyId: string) => {
    try {
      if (isSaved) {
        await mutateAsyncDelete(propertyId);
        toast.success("Property unsaved successfully");
      } else {
        await mutateAsync({property: propertyId});
        toast.success("Property saved successfully");
      }
      await invalidateQueries(QUERY_KEYS.globalProperties, QUERY_KEYS.savedProperties, QUERY_KEYS.property)
    } catch (e) {
      handleAxiosError(e)
    }
  };
  return {handleSaving, isPending, isLoading}
}
export default useSavePropertyHandler