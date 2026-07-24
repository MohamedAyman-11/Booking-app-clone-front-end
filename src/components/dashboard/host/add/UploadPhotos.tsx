import {Box} from "@mui/material";
import Button from "../../../ui/Button.tsx";
import {PlusIcon} from "lucide-react";
import type {ChangeEvent} from "react";

interface Props {
  handleImages: (e: ChangeEvent<HTMLInputElement>) => void
}

const UploadPhotos = ({handleImages}: Props) => {
  return (
    <Box sx={{width: '133.5px'}}>
      <Button
        component="label"
        type="button"
        isLoading={false}
        sx={{
          width: '100%',
          padding: "30px 40px",
          border: "1px solid #1976d2",
        }}
      >
        <PlusIcon/>
        <input
          hidden
          type="file"
          multiple
          onChange={handleImages}
        />
      </Button>
    </Box>
  );
};

export default UploadPhotos;