import {Box, Fade, IconButton} from "@mui/material";
import {XIcon} from "lucide-react";

interface Image {
  url: string;
  public_id: string;
}

interface Props {
  images: (File | Image)[];
  deleteImage: (index: number) => void;
}

const PropertyImagesPreview = ({images, deleteImage}: Props) => {
  return (
    <>
      {images && images.map((file, i) =>
        <Fade key={`${i}`} in={images.length > 0} timeout={300}>
          <Box sx={{
            height: '90px',
            position: 'relative',
            width: 'calc(100% / 4 - 12px )'
          }}>
            <IconButton sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50% , -50%)',
              p: 0,
              width: '100%',
              height: '100%',
              borderRadius: '6px',
              opacity: 0,
              bgcolor: 'rgb(0 0 0 / 30%)',
              transition: 'all 0.3s ease',
              ':hover': {
                bgcolor: 'rgb(0 0 0 / 30%)',
                opacity: 1,
              }
            }} onClick={() => deleteImage(i)}>
              <XIcon size={25} color={'#fff'}/>
            </IconButton>
            <Box sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '6px'
            }} component={'img'} src={
              file instanceof File
                ? URL.createObjectURL(file)
                : file.url
            }/>
          </Box>
        </Fade>
      )}
    </>
  );
};

export default PropertyImagesPreview;