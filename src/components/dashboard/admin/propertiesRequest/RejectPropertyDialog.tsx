import {
  Avatar,
  Box,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {CancelRounded, LocationOnRounded, PersonRounded,} from "@mui/icons-material";
import Button from "../../../ui/Button.tsx";
import type {Property} from "../../../../interfaces";
import useUpdatePropertyStatus from "../../../../hooks/admin/useUpdatePropertyStatus.ts";
import useInvalidateQueries from "../../../../hooks/handlers/useInvalidateQueries.ts";
import toast from "react-hot-toast";
import {QUERY_KEYS} from "../../../../constants";
import {handleAxiosError, validateRejectReason} from "../../../../utils/functions.ts";
import {useState} from "react";

interface Props {
  property: Property
  onClose: () => void;
}

const RejectPropertyDialog = ({property, onClose}: Props) => {
  const [rejectReason, setRejectReason] = useState<string>('')
  const [error, setError] = useState<string>('')
  const {mutateAsync, isPending} = useUpdatePropertyStatus()
  const {invalidateQueries} = useInvalidateQueries()
  console.log(error)
  const onRejectHandler = async () => {
    const e = validateRejectReason(rejectReason)
    if (e) {
      setError(e)
      return
    }
    try {
      const response = await mutateAsync({id: property._id, status: 'rejected', rejectReason})
      onClose()
      toast.success(response.message)
      await invalidateQueries(QUERY_KEYS.adminProperties, QUERY_KEYS.globalProperties, QUERY_KEYS.propertiesRequest)
    } catch (e) {
      handleAxiosError(e)
    }
  }
  return (
    <>
      <DialogTitle sx={{pb: 1}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              bgcolor: "#FEECEC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CancelRounded
              sx={{
                fontSize: 40,
                color: "error.main",
              }}
            />
          </Box>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Reject Property
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              textAlign: "center",
              maxWidth: 420,
            }}
          >
            This property won't be published. Please provide a reason so the host
            understands what needs to be fixed before submitting again.
          </Typography>
        </Box>
      </DialogTitle>

      <DialogContent sx={{mt: 2}}>
        <Divider sx={{mb: 3}}/>

        <Stack spacing={3}>
          {/* Property */}

          <Box sx={{display: "flex", gap: 2}}>
            <Box
              component="img"
              src={property.images[0].url}
              alt={property.name}
              sx={{
                width: 90,
                height: 70,
                borderRadius: 2,
                objectFit: "cover",
              }}
            />

            <Box>
              <Typography sx={{fontWeight: 600}}>
                {property.name}
              </Typography>

              <Typography sx={{color: "#595959", fontSize: 14}}>
                {property.propertyType}
              </Typography>
            </Box>
          </Box>

          {/* Host */}

          <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
            {property.host?.photo ? (
              <Avatar src={property.host.photo.url}/>
            ) : (
              <Avatar>
                <PersonRounded/>
              </Avatar>
            )}

            <Typography sx={{fontWeight: 600}}>
              By {property.host?.name}
            </Typography>
          </Box>

          {/* Location */}
          <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
            <LocationOnRounded color="action"/>

            <Typography>
              {property.location.city}, {property.location.country}
            </Typography>
          </Box>

          <Divider/>

          <TextField
            label="Reject Reason"
            placeholder="Explain why this property is being rejected..."
            multiline
            rows={4}
            fullWidth
            value={rejectReason}
            onChange={(e) => setRejectReason(e.target.value)}
            error={!!error}
            helperText={error}
            slotProps={{
              inputLabel: {
                sx: {fontSize: '16px'}
              }
            }}
            sx={{
              '& p': {ml: 0, color: 'blue'}
            }}
          />

          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              bgcolor: "#FFF4E5",
              border: "1px solid #F8D8A8",
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                mb: 1,
              }}
            >
              The host will receive:
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              • Your rejection reason.
              <br/>
              • The option to edit and resubmit the property.
            </Typography>
          </Box>
        </Stack>
      </DialogContent>

      <DialogActions sx={{px: 3, pb: 3}}>
        <Button
          isLoading={isPending}
          fullWidth
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          fullWidth
          color="error"
          variant="contained"
          isLoading={isPending}
          onClick={onRejectHandler}
        >
          Reject Property
        </Button>
      </DialogActions>
    </>
  );
};

export default RejectPropertyDialog;
