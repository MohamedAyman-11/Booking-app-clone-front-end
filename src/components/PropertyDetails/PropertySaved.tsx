import Button from "../ui/Button.tsx";
import {Heart} from "lucide-react";
import {CircularProgress} from "@mui/material";
import useSavePropertyHandler from "../../hooks/handlers/useSavePropertyHandler.ts";

interface Props {
  isSaved: boolean
  propertyId: string
}

const PropertySaved = ({isSaved, propertyId}: Props) => {
  const {handleSaving, isLoading} = useSavePropertyHandler()
  return (
    <Button onClick={async () => {
      await handleSaving(isSaved, propertyId)
    }} disableRipple={true} isLoading={isLoading} disabled={isLoading}
            sx={{
              display: 'flex', alignItems: 'center', color: '#222222', gap: '8px', textDecoration: 'underline',
              ':hover': {
                textDecoration: 'underline',
                background: 'none'
              }
            }} loadingIndicator={
      <CircularProgress
        size={18}
        sx={(theme) => ({color: theme.palette.brand.primary, transition: 'all 0.3s ease'})}
      />}>
      <Heart fill={'red'} size={22} color={'red'}/>
    </Button>
  );
};

export default PropertySaved;