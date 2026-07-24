import {useMutation} from "@tanstack/react-query";
import {googleAuth} from "../../api/auth.ts";

const useGoogleAuth = () => {
  return useMutation({
    mutationFn: googleAuth
  })
}

export default useGoogleAuth;