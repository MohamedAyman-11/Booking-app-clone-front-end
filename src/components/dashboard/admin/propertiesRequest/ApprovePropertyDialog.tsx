import {Avatar, Box, DialogActions, DialogContent, DialogTitle, Divider, Stack, Typography,} from "@mui/material";
import {CheckCircleRounded, LocationOnRounded, PersonRounded,} from "@mui/icons-material";
import Button from "../../../ui/Button.tsx";
import type {Property} from "../../../../interfaces";
import useUpdatePropertyStatus from "../../../../hooks/admin/useUpdatePropertyStatus.ts";
import useInvalidateQueries from "../../../../hooks/handlers/useInvalidateQueries.ts";
import {handleAxiosError} from "../../../../utils/functions.ts";
import toast from "react-hot-toast";
import {QUERY_KEYS} from "../../../../constants";

interface ApprovePropertyDialogProps {
  property: Property
  onClose: () => void;
}

const ApprovePropertyDialog = ({property, onClose,}: ApprovePropertyDialogProps) => {
  const {mutateAsync, isPending} = useUpdatePropertyStatus()
  const {invalidateQueries} = useInvalidateQueries()
  const onApproveHandler = async () => {
    try {
      const response = await mutateAsync({id: property._id, status: 'accepted'})
      onClose()
      toast.success(response.message)
      await invalidateQueries(QUERY_KEYS.adminProperties, QUERY_KEYS.property, QUERY_KEYS.globalProperties, QUERY_KEYS.propertiesRequest)
    } catch (e) {
      handleAxiosError(e)
    }
  }
  return (
    <>
      <DialogTitle sx={{pb: 1}}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Box
            sx={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              bgcolor: "#E8F5E9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CheckCircleRounded
              sx={{
                fontSize: 40,
                color: "success.main",
              }}
            />
          </Box>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              textAlign: 'center'
            }}
          >
            Approve Property
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              textAlign: 'center',
              maxWidth: 420
            }}
          >
            This property will become publicly visible and users will be able
            to book it immediately after approval.
          </Typography>
        </Box>
      </DialogTitle>

      <DialogContent sx={{mt: 2}}>
        <Divider sx={{mb: 3}}/>

        <Stack spacing={3}>
          {/* Property */}

          <Box sx={{display: 'flex', gap: 2}}>
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
              <Typography sx={{color: '#595959', fontSize: '14px'}}>
                {property.propertyType}
              </Typography>
            </Box>
          </Box>

          {/* Host */}

          <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
            {property.host?.photo ? (
              <Avatar src={property.host?.photo.url}/>
            ) : (
              <Avatar>
                <PersonRounded/>
              </Avatar>
            )}

            <Box>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
              </Typography>

              <Typography sx={{fontWeight: 600}}>
                By {property?.host?.name}
              </Typography>
            </Box>
          </Box>

          {/* Location */}

          <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
            <LocationOnRounded color="action"/>

            <Box>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Location
              </Typography>

              <Typography variant="subtitle2" sx={{fontWeight: 400}}>
                {property.location.city}, {property.location.country}
              </Typography>
            </Box>
          </Box>

          <Divider/>

          <Box>
            <Typography
              variant="subtitle2"
              sx={{fontWeight: 700, mb: 2}}
            >
              After approval
            </Typography>

            <Stack spacing={1.2}>
              <Typography color="text.secondary">
                ✅ Property becomes visible in results.
              </Typography>
              <Typography color="text.secondary">
                ✅ Users can start making bookings.
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </DialogContent>

      <DialogActions sx={{px: 3, pb: 3}}>
        <Button
          fullWidth
          isLoading={false}
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          onClick={onApproveHandler}
          fullWidth
          isLoading={isPending}
          variant="contained"
          color="success"
        >
          Approve Property
        </Button>
      </DialogActions>
    </>
  );
};

export default ApprovePropertyDialog;