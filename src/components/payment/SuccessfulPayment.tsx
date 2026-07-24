import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import {Box, Button, Divider, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {ROUTES_PATHS_DATA} from "../../constants";

const SuccessfulPayment = () => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 72px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(180deg, #F8FAFC 0%, #EEF4FF 100%)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 650,
          bgcolor: "#fff",
          borderRadius: "28px",
          overflow: "hidden",
          boxShadow: "0 25px 70px rgba(15,23,42,.12)",
          border: "1px solid #E5E7EB",
        }}
      >
        <Box
          sx={{
            height: 10,
            background:
              "linear-gradient(90deg,#22C55E,#4ADE80,#22C55E)",
          }}
        />

        <Box
          sx={{
            px: {xs: 3, md: 6},
            py: {xs: 5, md: 6},
          }}
        >
          <Box
            sx={{
              width: 95,
              height: 95,
              mx: "auto",
              borderRadius: "50%",
              bgcolor: "rgba(34,197,94,.12)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 4,
            }}
          >
            <CheckCircleRoundedIcon
              sx={{
                fontSize: 60,
                color: "#22C55E",
              }}
            />
          </Box>

          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: 800,
              color: "#0F172A",
              mb: 2,
            }}
          >
            Payment Successful
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#64748B",
              fontSize: "1.05rem",
              lineHeight: 1.9,
              maxWidth: 480,
              mx: "auto",
              mb: 5,
            }}
          >
            Your payment has been processed successfully and your reservation
            is now confirmed. A confirmation email with your booking details
            will arrive in your inbox shortly.
          </Typography>

          <Divider sx={{mb: 4}}/>

          <Stack
            spacing={2}
            sx={{
              mb: 5,
            }}
          >
            {[
              "Booking has been confirmed",
              "Payment received securely",
            ].map((item) => (
              <Box
                key={item}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: "#22C55E",
                    flexShrink: 0,
                  }}
                />

                <Typography
                  sx={{
                    color: "#334155",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Stack>

          <Stack
            direction={{xs: "column", sm: "row"}}
            spacing={2}
          >
            <Button
              component={Link}
              to={ROUTES_PATHS_DATA.reservations}
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon/>}
              sx={{
                flex: 1,
                py: 1.6,
                borderRadius: "14px",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 700,
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                },
              }}
            >
              View My Reservations
            </Button>

            <Button
              component={Link}
              to="/"
              variant="outlined"
              sx={{
                flex: 1,
                py: 1.6,
                borderRadius: "14px",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 700,
              }}
            >
              Back to Home
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default SuccessfulPayment;
