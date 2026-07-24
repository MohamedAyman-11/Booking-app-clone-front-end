import {Controller} from "react-hook-form";
import type {UpdatePropertySchema} from "../../../../types";
import {alpha, Box, IconButton, Stack, Typography} from "@mui/material";
import SelectMenu from "../../../ui/SelectMenu.tsx";
import {ADD_PROPERTY_FIELDS, PROPERTY_TYPES} from "../../../../constants";
import ErrorMsg from "../../../ui/ErrorMsg.tsx";
import Label from "../../../ui/Label.tsx";
import TextArea from "../../../ui/TextArea.tsx";
import Input from "../../../ui/Input.tsx";
import MultipleSelectChip from "../../../ui/MultipleSelectChip.tsx";
import PropertyImagesPreview from "../add/PropertyImagesPreview.tsx";
import UploadPhotos from "../add/UploadPhotos.tsx";
import Button from "../../../ui/Button.tsx";
import type {Property} from "../../../../interfaces";
import useUpdatePropertyHandler from "../../../../hooks/handlers/useUpdatePropertyHandler.ts";
import {XIcon} from "lucide-react";

interface Props {
  property: Property,
  onClose: () => void
}

const UpdateProperty = ({property, onClose}: Props) => {
  const {
    handleChangeImages,
    deleteImage,
    handleSubmit,
    onSubmit,
    control,
    register,
    errors,
    isPending,
    images,
    existingImages,
    reset
  } = useUpdatePropertyHandler({property, onClose})
  const onCloseModelHandler = () => {
    reset()
    onClose()
  }
  return (
    <Box sx={{width: '100%', mx: 'auto', p: '12px 15px 20px', position: 'relative'}}>
      <IconButton onClick={onCloseModelHandler} sx={{
        position: 'absolute',
        top: '5px',
        right: '0px',
        '& svg': {transition: 'all 0.3s ease'},
        ':hover svg': {
          color: 'red'
        },
      }}><XIcon/></IconButton>
      <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{
          mb: '15px',
          width: '100%',
          mt: '20px'
        }}>
          {/*Select Property Type*/}
          <Controller control={control} render={({field}) => (
            <>
              <SelectMenu label={'Property Type'} onchange={field.onChange} value={field.value}
                          options={PROPERTY_TYPES}/>
              {errors.propertyType && (
                <ErrorMsg msg={errors.propertyType.message}/>
              )}
            </>
          )} name={'propertyType'}/>
        </Box>
        {ADD_PROPERTY_FIELDS.map(el => {
          return (
            <Box key={el.id} sx={{
              mb: '15px',
            }}>
              <Label id={el.id}>{el.label}</Label>
              {el.name === 'description' ?
                <TextArea {...register('description')} id={el.id}/>
                : <Input slotProps={{
                  htmlInput: {
                    min: 0
                  }
                }} type={el.type} {...register(el.name as keyof UpdatePropertySchema)}
                         id={el.id}/>}
              {errors[el.name]?.message &&
                <ErrorMsg msg={errors[el.name]?.message}/>}
            </Box>
          )
        })}
        {/*Select Property Amenities*/}
        <Controller control={control} render={({field}) => (
          <>
            <MultipleSelectChip value={field.value} onChange={field.onChange}/>
            {errors.amenities && (
              <ErrorMsg msg={errors.amenities.message}/>
            )}
          </>
        )} name={'amenities'}/>
        {/*Handle Add, Delete And Preview Property Image */}
        <Box
          sx={{
            mt: 3,
            p: 3,
            border: "2px dashed",
            borderColor: "divider",
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h6"
            sx={{fontWeight: 600, textAlign: 'center', mb: 2}}
          >
            Property Images
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{mb: 3}}
          >
            Upload at least 5 images of your property.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            useFlexGap
            sx={{flexWrap: 'wrap'}}
          >
            <PropertyImagesPreview images={[...existingImages, ...images]} deleteImage={deleteImage}
            />

            {images.length + existingImages.length < 5 && (
              <UploadPhotos handleImages={handleChangeImages}/>
            )}
          </Stack>

          {errors.images && (
            <Box sx={{mt: '12px'}}>
              <ErrorMsg msg={errors.images.message}/>
            </Box>
          )}
        </Box>
        <Stack direction={'row'} sx={{alignItems: 'center', gap: '10px'}}>
          <Button fullWidth type={'submit'} isLoading={isPending} sx={{
            mt: 4,
            py: 1.5,
            borderRadius: 3,
            fontWeight: 700,
            fontSize: 16,
            transition: 'all 0.3s ease',
            ':hover': {
              transform: 'translateY(-2px) scale(1.001)',
              boxShadow: `0 1px 10px ${alpha('#007aff', 0.9)}`
            }
          }} variant={'contained'}>Update property</Button>
          <Button onClick={onCloseModelHandler} fullWidth type={'button'} isLoading={false} sx={{
            mt: 4,
            py: 1.5,
            borderRadius: 3,
            fontWeight: 700,
            fontSize: 16,
            transition: 'all 0.3s ease',
            ':hover': {
              transform: 'translateY(-2px) scale(1.001)',
              boxShadow: `0 1px 10px ${alpha('#007aff', 0.9)}`
            }
          }}
                  variant={'outlined'}>Cancel</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default UpdateProperty;