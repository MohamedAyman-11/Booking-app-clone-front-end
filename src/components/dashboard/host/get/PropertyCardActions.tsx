import {Box, Stack} from "@mui/material";
import type {Property} from "../../../../interfaces";
import Button from "@mui/material/Button";
import {Pen, Trash} from "lucide-react";
import {useState} from "react";
import Modal from "../../../ui/Modal.tsx";
import UpdateProperty from "../update/UpdateProperty.tsx";
import DeleteProperty from "../delete/DeleteProperty.tsx";

interface Props {
  property: Property
}

const PropertyCardActions = ({property}: Props) => {
  const [openUpdateModel, setOpenUpdateModel] = useState<boolean>(false);
  const onOpenUpdateModel = () => setOpenUpdateModel(true);
  const onCloseUpdateModel = () => setOpenUpdateModel(false);
  const [openDeleteModel, setOpenDeleteModel] = useState<boolean>(false);
  const onOpenDeleteModel = () => setOpenDeleteModel(true);
  const onCloseDeleteModel = () => setOpenDeleteModel(false);
  return (
    <Box sx={{mt: '20px', pb: '20px', px: '10px'}}>
      <Stack direction={'row'} sx={{alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
        <Button
          onClick={onOpenUpdateModel}
          fullWidth
          sx={{
            bgcolor: 'primary.main',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            fontSize: '13px',
          }}>
          Edit <Pen size={17}/>
        </Button>
        <Button onClick={onOpenDeleteModel}
                fullWidth
                sx={{
                  bgcolor: 'error.light',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '13px'
                }}>
          Delete <Trash size={17}/>
        </Button>
      </Stack>
      <Modal onClose={onCloseUpdateModel} open={openUpdateModel} maxWidth={'650px'}>
        <UpdateProperty property={property} onClose={onCloseUpdateModel}/>
      </Modal>
      <Modal onClose={onCloseDeleteModel} open={openDeleteModel} maxWidth={'500px'}>
        <DeleteProperty onCloseDeleteModel={onCloseDeleteModel} open={openDeleteModel} propertyId={property._id}/>
      </Modal>
    </Box>
  );
};

export default PropertyCardActions;