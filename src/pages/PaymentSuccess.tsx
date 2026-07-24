import {Box, Container} from "@mui/material";
import SuccessfulPayment from "../components/payment/SuccessfulPayment.tsx";

const PaymentSuccess = () => {
  return (
    <Box>
      <Container maxWidth={'xl'}>
        <SuccessfulPayment/>
      </Container>
    </Box>
  );
};

export default PaymentSuccess;