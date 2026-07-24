import {Box, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography} from "@mui/material";
import {handleAxiosError} from "../../../../utils/functions.ts";
import toast from "react-hot-toast";
import {QUERY_KEYS} from "../../../../constants";
import {TriangleAlert} from "lucide-react";
import Button from "../../../ui/Button.tsx";
import useInvalidateQueries from "../../../../hooks/handlers/useInvalidateQueries.ts";
import type {Property} from "../../../../interfaces";
import useDeleteProperty from "../../../../hooks/host/useDeleteProperty.ts";

interface Props {
  property: Property
  onCloseDeleteModal: () => void
  open: boolean
}

const DeleteProperty = ({property, onCloseDeleteModal}: Props) => {
  const {mutateAsync, isPending} = useDeleteProperty()
  const {invalidateQueries} = useInvalidateQueries()
  const onDeletePropertyHandler = async () => {
    try {
      await mutateAsync({id: property._id})
      toast.success('Property deleted successfully')
      await invalidateQueries(QUERY_KEYS.myProperties, QUERY_KEYS.globalProperties, QUERY_KEYS.savedProperties, QUERY_KEYS.adminProperties, QUERY_KEYS.adminStats)
    } catch (e) {
      handleAxiosError(e)
    }
  }
  return (
    <>
      <Box
        sx={{
          width: 72,
          height: 72,
          mx: "auto",
          mt: 3,
          borderRadius: "50%",
          bgcolor: "#FFF4E5",
          border: "1px solid #F8D8A8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TriangleAlert
          size={36}
          color="#ED6C02"
          strokeWidth={2.3}
        />
      </Box>

      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "1.55rem",
          pb: 1,
        }}
      >
        Delete Property
      </DialogTitle>

      <DialogContent sx={{px: 4}}>
        <DialogContentText
          sx={{
            textAlign: "center",
            color: "text.secondary",
            fontSize: "15px",
            lineHeight: 1.9,
          }}
        >
          You are about to permanently remove <strong>{property.name}</strong> owned by{" "}
          <strong>{property?.host?.name}</strong>. All related images, reviews, bookings,
          and associated records will be deleted from the platform.
        </DialogContentText>

        <Typography
          sx={{
            mt: 2.5,
            textAlign: "center",
            color: "error.main",
            fontWeight: 700,
            fontSize: "14px",
            letterSpacing: 0.2,
          }}
        >
          ⚠️ This administrative action is permanent and cannot be undone.
        </Typography>
      </DialogContent>

      <DialogActions
        sx={{
          px: 3,
          pb: 3,
          pt: 1,
          gap: 1.5,
          flexDirection: "column",
        }}
      >
        <Button
          fullWidth
          variant="contained"
          color="error"
          isLoading={isPending}
          onClick={onDeletePropertyHandler}
          sx={{
            py: 1.3,
            fontWeight: 700,
            borderRadius: 2,
            textTransform: "none",
          }}
        >
          Delete Property
        </Button>

        <Button
          fullWidth
          variant="outlined"
          isLoading={false}
          onClick={onCloseDeleteModal}
          sx={{
            py: 1.3,
            borderRadius: 2,
            textTransform: "none",
            borderColor: "#D0D5DD",
            color: "text.primary",
            "&:hover": {
              borderColor: "#98A2B3",
              bgcolor: "#F9FAFB",
            },
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </>
  );
};

export default DeleteProperty;