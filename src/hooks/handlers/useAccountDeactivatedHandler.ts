import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {ROUTES_PATHS_DATA} from "../../constants";

const useAccountDeactivatedHandler = () => {
  const navigate = useNavigate()
  const handleAccountDeactivatedError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
      toast.error(error.response?.data?.message);
      if (error.response?.data?.code === 'ACCOUNT_DEACTIVATED') {
        navigate(ROUTES_PATHS_DATA.restoreAccount);
        return;
      }
    } else {
      toast.error('Something went wrong!')
    }
  }
  return {handleAccountDeactivatedError}
}
export default useAccountDeactivatedHandler;