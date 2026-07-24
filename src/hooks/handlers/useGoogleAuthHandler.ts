import toast from "react-hot-toast";
import type {CredentialResponse} from "@react-oauth/google";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import useGoogleAuth from "../auth/useGoogleAuth.ts";
import useInvalidateQueries from "./useInvalidateQueries.ts";
import {QUERY_KEYS} from "../../constants";

const useGoogleAuthHandler = () => {
  const {mutateAsync} = useGoogleAuth()
  const navigate = useNavigate()
  const {invalidateQueries} = useInvalidateQueries()
  const onGoogleAuthSubmit = async ({credential}: CredentialResponse) => {
    try {
      if (!credential) {
        toast.error("Google authentication failed");
        return;
      }
      await mutateAsync({credential})
      toast.success('Logged in successfully')
      await invalidateQueries(QUERY_KEYS.currentUser)
      navigate('/')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message);
        if (error.response?.data?.code === 'ACCOUNT_DEACTIVATED') {
          setTimeout(() => {
            navigate('/restore-my-account');
          }, 1000)
          return;
        }
      } else {
        toast.error('Something went wrong!')
      }
    }
  }
  return {onGoogleAuthSubmit}
}

export default useGoogleAuthHandler;