import {Box, CircularProgress, IconButton} from "@mui/material";
import {HeartIcon} from "lucide-react";
import useSavePropertyHandler from "../../hooks/handlers/useSavePropertyHandler.ts";
import {saveButtonStyle} from "../../styles/styles.ts";

interface Props {
  isSaved: boolean
  propertyId: string
}

const SavePropertyIcon = ({isSaved, propertyId}: Props) => {
  const {handleSaving, isPending, isLoading} = useSavePropertyHandler()
  return (
    <Box onClick={async (e) => {
      e.preventDefault()
      await handleSaving(isSaved, propertyId)
    }}>
      <Box sx={saveButtonStyle}>
        {isPending || isLoading ?
          <IconButton loading={true} sx={(theme) => ({color: theme.palette.brand.primary})} loadingIndicator={
            <CircularProgress
              size={18}
              sx={(theme) => ({color: theme.palette.brand.primary, transition: 'all 0.3s ease'})}
            />
          }/> :
          <HeartIcon color={isSaved ? 'red' : '#1A1A1A'} size={20} strokeWidth={'1.7px'}
                     fill={isSaved ? 'red' : 'none'}/>}
      </Box>
    </Box>
  );
};

export default SavePropertyIcon;