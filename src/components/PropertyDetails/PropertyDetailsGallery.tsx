import {Box, Stack} from "@mui/material";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import {useRef} from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import type {GalleryItem} from "lightgallery/lg-utils";

interface Props {
  images: {
    url: string
  }[]
}

const PropertyDetailsGallery = ({images}: Props) => {
  const galleryRef = useRef<GalleryItem>(null);
  return (
    <>
      <Stack direction={"row"} sx={{
        mt: '20px'
      }}>
        <Box sx={{width: '50%', maxHeight: 'calc(60vh - 64px)', mr: '8px',}}>
          <Box onClick={() => galleryRef.current?.openGallery(0)} sx={{
            width: '100%', height: '100%', cursor: 'pointer', position: 'relative', ':before': {
              position: 'absolute',
              content: '""',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              background: 'none',
              zIndex: 9,
              transition: 'all 0.3s  ease',
            },
            ':hover:before': {
              background: 'rgba(0, 0, 0, 0.1)'
            }
          }}>
            <Box component={'img'}
                 sx={{width: '100%', height: '100%', borderRadius: '12px 0px 0px 12px', objectFit: 'cover'}}
                 src={images[0].url}
                 alt={'Property-Preview'}
            />
          </Box>
        </Box>

        <Box sx={{maxHeight: 'calc(60vh - 64px)', width: '25%'}}>
          <Box sx={{
            height: '100%', width: '100%'
          }}>
            <Box onClick={() => galleryRef.current?.openGallery(1)} sx={{
              width: '100%', height: '50%', cursor: 'pointer', position: 'relative', ':before': {
                position: 'absolute',
                content: '""',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'none',
                zIndex: 9,
                transition: 'all 0.3s  ease',
              },
              ':hover:before': {
                background: 'rgba(0, 0, 0, 0.1)'
              }
            }}>
              <Box component={'img'}
                   sx={{
                     width: '100%',
                     height: '100%',
                     objectFit: 'cover'
                   }}
                   src={images[1].url}
                   alt={'Property-Preview'}
              />
            </Box>
            <Box onClick={() => galleryRef.current?.openGallery(2)} sx={{
              width: '100%', height: '50%', pt: '8px', cursor: 'pointer', position: 'relative', ':before': {
                position: 'absolute',
                content: '""',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'none',
                zIndex: 9,
                transition: 'all 0.3s  ease',
              },
              ':hover:before': {
                background: 'rgba(0, 0, 0, 0.1)'
              }
            }}>
              <Box component={'img'}
                   sx={{
                     width: '100%',
                     height: '100%',
                     objectFit: 'cover'
                   }}
                   src={images[2].url}
                   alt={'Property-Preview'}
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{maxHeight: 'calc(60vh - 64px)', ml: '8px', width: '25%'}}>
          <Box sx={{
            height: '100%', width: '100%'
          }}>
            <Box onClick={() => galleryRef.current?.openGallery(3)} sx={{
              width: '100%', height: '50%', cursor: 'pointer', position: 'relative', ':before': {
                position: 'absolute',
                content: '""',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'none',
                zIndex: 9,
                transition: 'all 0.3s  ease',
              },
              ':hover:before': {
                background: 'rgba(0, 0, 0, 0.1)'
              }
            }}>
              <Box component={'img'}
                   sx={{
                     width: '100%',
                     height: '100%',
                     borderRadius: '0 12px 12px 0',
                     objectFit: 'cover'
                   }}
                   src={images[3].url}
                   alt={'Property-Preview'}
              />
            </Box>
            <Box onClick={() => galleryRef.current?.openGallery(4)} sx={{
              width: '100%', height: '50%', pt: '8px', cursor: 'pointer', position: 'relative', ':before': {
                position: 'absolute',
                content: '""',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'none',
                zIndex: 9,
                transition: 'all 0.3s  ease',
              },
              ':hover:before': {
                background: 'rgba(0, 0, 0, 0.1)'
              }
            }}>
              <Box component={'img'}
                   sx={{
                     width: '100%',
                     height: '100%',
                     borderRadius: '0 12px 12px 0',
                     objectFit: 'cover'
                   }}
                   src={images[4].url}
                   alt={'Property-Preview'}
              />
            </Box>
          </Box>
        </Box>
      </Stack>
      <LightGallery
        onInit={(detail) => {
          galleryRef.current = detail.instance;
        }}
        dynamic
        dynamicEl={images.map((image) => ({
          src: image.url,
          thumb: image.url
        }))}
        plugins={[lgZoom, lgThumbnail]}
      />
    </>
  );
};

export default PropertyDetailsGallery;