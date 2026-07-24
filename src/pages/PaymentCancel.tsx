import {Box, Container} from "@mui/material";
import CancelPayment from "../components/payment/CancelPayment.tsx";

const PaymentCancel = () => {
  return (
    <Box>
      <Container maxWidth={'xl'}>
        <CancelPayment/>
      </Container>
    </Box>
  );
};

export default PaymentCancel;