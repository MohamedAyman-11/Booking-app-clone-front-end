import {useQuery} from "@tanstack/react-query";
import {getMe} from "../../api/user.ts";
import {QUERY_KEYS} from "../../constants";

const useCurrentUser = () => {
  return useQuery({
    queryKey: QUERY_KEYS.currentUser,
    queryFn: getMe,
    retry: false
  })
}
export default useCurrentUser;