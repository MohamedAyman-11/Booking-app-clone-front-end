import {useMutation} from "@tanstack/react-query";
import {sendOtp} from "../../api/auth.ts";

const useSendOTP = () => {
  return useMutation({
    mutationFn: sendOtp
  })
}
export default useSendOTP