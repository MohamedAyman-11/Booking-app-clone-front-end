import {Button} from "@mui/material";
import {CloudUploadIcon} from "lucide-react";
import {buttonTheme} from "../../styles/styles.ts";

interface Props {
  setFile: (file: File | null) => void
}

const FileInput = ({setFile}: Props) => {
  return (
    <>
      <input
        type="file"
        id="file-upload"
        hidden
        onChange={(e) => setFile(e.target?.files?.[0] || null)}
      />
      <label htmlFor="file-upload">
        <Button
          variant="contained"
          component="span"
          sx={buttonTheme}
          startIcon={<CloudUploadIcon/>}
        >
          Upload profile photo (Optional)
        </Button>
      </label>
    </>
  );
};

export default FileInput;