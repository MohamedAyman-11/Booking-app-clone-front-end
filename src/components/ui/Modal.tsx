import Dialog from '@mui/material/Dialog';
import {forwardRef, Fragment, type ReactElement, type ReactNode, type Ref} from "react";
import {Slide, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import type {TransitionProps} from "@mui/material/transitions";

interface Props {
  onClose: () => void,
  open: boolean,
  children: ReactNode
  maxWidth?: string
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<never, never>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Modal = ({children, onClose, open, maxWidth}: Props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
        role="alertdialog"
        slots={{
          transition: Transition,
        }}
        slotProps={
          {
            paper: {
              sx: {
                width: '100%',
                maxWidth: maxWidth,
                overflowY: "auto",

                "&::-webkit-scrollbar": {
                  width: 8,
                },
                "&::-webkit-scrollbar-track": {
                  background: "transparent",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#bdbdbd",
                  borderRadius: 10,
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  backgroundColor: "#9e9e9e",
                },
              }
            }
          }
        }
      >
        {children}
      </Dialog>
    </Fragment>
  );
}
export default Modal