import {Box, IconButton, Typography} from "@mui/material";
import FileInput from "./FileInput.tsx";
import {TrashIcon} from "lucide-react";

interface Props {
  setFile: (file: File | null) => void;
  file: File | null,
}

const FileUploader = ({setFile, file}: Props) => {
  return (
    <Box sx={{
      mb: '10px'
    }}>
      <FileInput setFile={setFile}/>
      <Box sx={{
        textAlign: 'center',
        my: '10px',

      }}>
        {
          file ?
            <Typography sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '13px',
              gap: '10px',
              justifyContent: 'center'
            }}>{file.name} <IconButton onClick={() => setFile(null)} sx={{p: 0}}>
              <TrashIcon color={'red'} cursor={'pointer'} size={18}
                         onClick={() => setFile(null)}/>
            </IconButton></Typography> :
            <Typography>No file selected </Typography>
        }
      </Box>
    </Box>
  );
};

export default FileUploader;