import Button from "../ui/Button.tsx";
import {HeartIcon} from "lucide-react";
import {CircularProgress} from "@mui/material";
import useSavePropertyHandler from "../../hooks/handlers/useSavePropertyHandler.ts";

interface Props {
  isSaved: boolean
  propertyId: string
}

const SaveProperty = ({isSaved, propertyId}: Props) => {
  const {handleSaving, isPending} = useSavePropertyHandler()
  return (
    <Button onClick={async () => {
      await handleSaving(isSaved, propertyId)
    }} disableRipple={true} isLoading={isPending} disabled={isPending}
            sx={{
              display: 'flex', alignItems: 'center', color: '#222222', gap: '8px', textDecoration: 'underline',
              ':hover': {
                textDecoration: 'underline',
                background: 'none'
              },
            }}
            loadingIndicator={
              <CircularProgress
                size={18}
                sx={(theme) => ({color: theme.palette.brand.primary, transition: 'all 0.3s ease'})}
              />}>
      <HeartIcon size={22}/>
    </Button>
  );
};

export default SaveProperty;