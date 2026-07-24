import theme from "../../config/mui.config.ts";
import {Toaster} from "react-hot-toast";

const CustomToaster = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={
        {
          style: {
            fontFamily: theme.typography.fontFamily,
            fontWeight: 500,
            minWidth: '250px',
            maxWidth: '440px',
            whiteSpace: 'nowrap',
          }
        }
      }
    />
  );
};

export default CustomToaster;