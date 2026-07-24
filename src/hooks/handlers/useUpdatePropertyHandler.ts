import type {UpdatePropertySchema} from "../../types";
import type {Property} from "../../interfaces";
import useUpdateProperty from "../host/useUpdateProperty.ts";
import useInvalidateQueries from "./useInvalidateQueries.ts";
import {type SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {updatePropertySchema} from "../../validation";
import {type ChangeEvent, useState} from "react";
import {handleAxiosError} from "../../utils/functions.ts";
import toast from "react-hot-toast";
import {QUERY_KEYS} from "../../constants";

interface Params {
  property: Property,
  onClose: () => void
}

const useUpdatePropertyHandler = ({property, onClose}: Params) => {
  const {mutateAsync, isPending} = useUpdateProperty()
  const {invalidateQueries} = useInvalidateQueries()
  const {
    control, register, reset, handleSubmit, setError, formState: {errors}
  } = useForm({
    resolver: zodResolver(updatePropertySchema),
    defaultValues: {
      propertyType: property.propertyType,
      amenities: property.amenities,
      beds: property.beds,
      stars: property.stars,
      guests: property.guests,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      name: property.name,
      city: property.location.city,
      discount: property.discount,
      country: property.location.country,
      pricePerNight: property.pricePerNight,
      description: property.description,
    },
    mode: 'onChange'
  });
  const [images, setImages] = useState<File[]>([]);
  const [existingImages, setExistingImages] = useState(property.images);
  const [deletedImages, setDeletedImages] = useState<string[]>([]);
  /* ** HANDLERS ** */
  const handleChangeImages = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return;
    const remaining = 5 - (existingImages.length + images.length);
    const updatedImages = [
      ...images,
      ...Array.from(files).slice(0, remaining),
    ];
    setImages(updatedImages);
  };
  // Handle Delete Image
  const deleteImage = (index: number) => {
    // Delete Old Images
    if (index < existingImages.length) {
      const deletedImage = existingImages[index];
      setDeletedImages(prev => [...prev, deletedImage.public_id])
      setExistingImages(prev => prev.filter((_, i) => i !== index))
    }
    // Delete New Images
    else {
      const newIndex = index - existingImages.length;
      const updatedImages = images.filter((_, i) => i !== newIndex)
      setImages(updatedImages);
    }
  };
  const onSubmit: SubmitHandler<UpdatePropertySchema> = async (data) => {
    const totalImages = images.length + existingImages.length;
    if (totalImages < 5) {
      setError("images", {
        type: "manual",
        message: "Property images must be 5 images",
      });
      return;
    }
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("propertyType", data.propertyType);
    formData.append("pricePerNight", String(data.pricePerNight));
    formData.append("guests", String(data.guests));
    formData.append("bedrooms", String(data.bedrooms));
    formData.append("beds", String(data.beds));
    formData.append("bathrooms", String(data.bathrooms));
    formData.append("discount", String(data.discount));
    formData.append("stars", String(data.stars));
    formData.append("city", data.city);
    formData.append("country", data.country);
    data.amenities.forEach((amenity) => {
      formData.append("amenities", amenity);
    });
    // Handle Images
    formData.append('existingImages', JSON.stringify(existingImages))
    images.forEach((image) => {
      formData.append("images", image);
    });
    formData.append('deletedImages', JSON.stringify(deletedImages));
    try {
      await mutateAsync({propertyData: formData, id: property._id})
      await invalidateQueries(QUERY_KEYS.myProperties, QUERY_KEYS.globalProperties, QUERY_KEYS.savedProperties)
      toast.success('Property updated successfully')
      reset()
      onClose()
    } catch (e) {
      handleAxiosError(e)
    }
  }
  return {
    isPending,
    onSubmit,
    deleteImage,
    handleChangeImages,
    errors,
    control,
    handleSubmit,
    register,
    existingImages,
    images,
    reset
  }
}

export default useUpdatePropertyHandler;