import {alpha, Box, Stack, Typography} from "@mui/material";
import {ADD_PROPERTY_FIELDS, PROPERTY_TYPES, QUERY_KEYS} from "../../../../constants";
import Label from "../../../ui/Label.tsx";
import Input from "../../../ui/Input.tsx";
import TextArea from "../../../ui/TextArea.tsx";
import {type ChangeEvent, useState} from "react";
import Button from "../../../ui/Button.tsx";
import UploadPhotos from "./UploadPhotos.tsx";
import PropertyImagesPreview from "./PropertyImagesPreview.tsx";
import {Controller, type SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {propertySchema} from "../../../../validation";
import type {PropertySchema} from "../../../../types";
import SelectMenu from "../../../ui/SelectMenu.tsx";
import MultipleSelectChip from "../../../ui/MultipleSelectChip.tsx";
import ErrorMsg from "../../../ui/ErrorMsg.tsx";
import {handleAxiosError, handlePropertyReqBody} from "../../../../utils/functions.ts";
import useCreateProperty from "../../../../hooks/host/useCreateProperty.ts";
import toast from "react-hot-toast";
import useInvalidateQueries from "../../../../hooks/handlers/useInvalidateQueries.ts";

const AddPropertyForm = () => {
  const {invalidateQueries} = useInvalidateQueries()
  const {mutateAsync, isPending} = useCreateProperty()
  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm<PropertySchema>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      propertyType: "",
      amenities: [],
      images: [],
    },
    mode: 'onChange'
  });
  const [images, setImages] = useState<File[]>([]);
  /* ** HANDLERS ** */
  const handleImages = (e: ChangeEvent<HTMLInputElement>) => {

    const files = e.target.files
    if (!files) return;
    const remaining = 5 - images.length
    if (remaining <= 0) {
      e.target.value = "";
      return
    }
    const newImages = [...images, ...Array.from(files).slice(0, remaining)];
    setImages(newImages);
    setValue('images', newImages, {shouldValidate: true})
  };
  // Handle Delete Image
  const deleteImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages)
    setValue('images', newImages, {shouldValidate: true})
  };
  // Handle Submit
  const onSubmit: SubmitHandler<PropertySchema> = async (data) => {
    const property = handlePropertyReqBody(data)
    try {
      await mutateAsync(property)
      await invalidateQueries(QUERY_KEYS.myProperties)
      reset()
      setImages([]);
      toast.success(
        "Your listing has been submitted and is now under review. You'll be notified once it's approved and published."
        , {duration: 3000});
    } catch (e) {
      handleAxiosError(e)
    }
  }

  return (
    <Box sx={{
      maxWidth: 700,
      width: "100%",
      mx: "auto",
      mt: 5,
      p: 4,
      bgcolor: "background.paper",
      borderRadius: 4,
      boxShadow: "0 8px 30px rgba(0,0,0,.08)",
      border: "1px solid",
      borderColor: "divider",
    }}>
      <Typography
        variant="h4"
        sx={{fontWeight: 700, textAlign: 'center', mb: 1}}
      >
        Create Property
      </Typography>

      <Typography
        sx={{textAlign: 'center', mb: 4, color: '#595959'}}
      >
        Fill in your property information
      </Typography>
      <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{
          mb: '15px',
          width: '100%'
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
                }} type={el.type}
                         {...register(el.name as keyof PropertySchema, {
                           valueAsNumber: el.type === "number",
                         })}
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
            <PropertyImagesPreview
              images={images}
              deleteImage={deleteImage}
            />

            {images.length < 5 && (
              <UploadPhotos handleImages={handleImages}/>
            )}
          </Stack>

          {errors.images && (
            <Box sx={{mt: '12px'}}>
              <ErrorMsg msg={errors.images.message}/>
            </Box>
          )}
        </Box>
        <Button type={'submit'} fullWidth={true} isLoading={isPending} sx={{
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
        }} variant={'contained'}>Create property</Button>
      </Box>
    </Box>
  );
};

export default AddPropertyForm;