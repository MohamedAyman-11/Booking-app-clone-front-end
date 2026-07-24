import {Box, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography,} from "@mui/material";
import {CircleCheck, TriangleAlert} from "lucide-react";
import type {User} from "../../../../interfaces";
import Button from "../../../ui/Button.tsx";
import useAdminToggleUserStatus from "../../../../hooks/admin/useAdminToggleUserStatus.ts";
import useInvalidateQueries from "../../../../hooks/handlers/useInvalidateQueries.ts";
import {QUERY_KEYS} from "../../../../constants";
import toast from "react-hot-toast";
import {handleAxiosError} from "../../../../utils/functions.ts";

interface Props {
  user: User;
  onCloseDeleteModal: () => void;
}

const AdminToggleUserStatus = ({user, onCloseDeleteModal}: Props) => {
  const isActive = user.active;

  const {invalidateQueries} = useInvalidateQueries();
  const {mutateAsync, isPending} = useAdminToggleUserStatus();

  const onToggleUserStatusHandler = async () => {
    try {
      const data = await mutateAsync(user._id);
      onCloseDeleteModal();
      await invalidateQueries(QUERY_KEYS.adminUsers);
      toast.success(data.message);
    } catch (e) {
      handleAxiosError(e);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: 72,
          height: 72,
          mx: "auto",
          mt: 3,
          borderRadius: "50%",
          bgcolor: isActive ? "#FFF4E5" : "#ECFDF3",
          border: isActive
            ? "1px solid #F8D8A8"
            : "1px solid #ABEFC6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isActive ? (
          <TriangleAlert
            size={36}
            color="#ED6C02"
            strokeWidth={2.3}
          />
        ) : (
          <CircleCheck
            size={36}
            color="#039855"
            strokeWidth={2.3}
          />
        )}
      </Box>

      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "1.55rem",
          pb: 1,
        }}
      >
        {isActive ? "Deactivate User" : "Activate User"}
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
          {isActive ? (
            <>
              You are about to deactivate <strong>{user.name}</strong>. This user will no
              longer be able to sign in or access the platform until the account is
              activated again.
            </>
          ) : (
            <>
              You are about to activate <strong>{user.name}</strong>. The user will regain
              access to the platform immediately.
            </>
          )}
        </DialogContentText>

        <Typography
          sx={{
            mt: 2.5,
            textAlign: "center",
            color: isActive ? "warning.main" : "success.main",
            fontWeight: 700,
            fontSize: "14px",
            letterSpacing: 0.2,
          }}
        >
          {isActive
            ? "⚠️ The account can be activated again at any time."
            : "✅ The account will be activated immediately."}
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
          color={isActive ? "warning" : "success"}
          isLoading={isPending}
          onClick={onToggleUserStatusHandler}
          sx={{
            py: 1.3,
            fontWeight: 700,
            borderRadius: 2,
            textTransform: "none",
          }}
        >
          {isActive ? "Deactivate User" : "Activate User"}
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

export default AdminToggleUserStatus;