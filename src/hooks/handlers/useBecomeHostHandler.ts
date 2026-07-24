import useBecomeHost from "../user/useBecomeHost.ts";
import toast from "react-hot-toast";
import {useQueryClient} from "@tanstack/react-query";
import {handleAxiosError} from "../../utils/functions.ts";
import {QUERY_KEYS} from "../../constants";

const useBecomeHostHandler = () => {
  const queryClient = useQueryClient()
  const {mutateAsync, isPending} = useBecomeHost()
  const onBecomeHost = async () => {
    try {
      const res = await mutateAsync();
      toast.success(res.message, {
        style: {
          width: 'fit-content'
        }

      })
      await queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.currentUser
      })
    } catch (e) {
      handleAxiosError(e)
    }
  }
  return {onBecomeHost, isPending}
}

export default useBecomeHostHandler