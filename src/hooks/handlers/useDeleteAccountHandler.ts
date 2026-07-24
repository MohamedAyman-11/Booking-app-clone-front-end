import {useQueryClient} from "@tanstack/react-query";
import useDeleteMyAccount from "../user/useDeleteMyAccount.ts";
import {useState} from "react";
import {handleAxiosError} from "../../utils/functions.ts";
import {ROUTES_PATHS_DATA} from "../../constants";

const useDeleteAccountHandler = () => {
  const queryClient = useQueryClient();
  const {mutateAsync, isPending} = useDeleteMyAccount()
  const [open, setOpen] = useState(false);
  /* ** Handlers ** */
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const onConfirmDeleteHandler = async () => {
    try {
      await mutateAsync()
      queryClient.clear()
      onCloseModal()
      location.replace(ROUTES_PATHS_DATA.login)
    } catch (e) {
      handleAxiosError(e)
    }
  }
  return {open, onOpenModal, onCloseModal, onConfirmDeleteHandler, isPending}
}
export default useDeleteAccountHandler;