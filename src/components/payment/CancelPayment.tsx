import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import {Box, Button, Divider, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {ROUTES_PATHS_DATA} from "../../constants";

const CancelPayment = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(180deg, #F8FAFC 0%, #FFF5F5 100%)",
        p: 3,
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
              "linear-gradient(90deg,#EF4444,#F87171,#EF4444)",
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
              bgcolor: "rgba(239,68,68,.12)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 4,
            }}
          >
            <CancelRoundedIcon
              sx={{
                fontSize: 60,
                color: "#EF4444",
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
            Payment Cancelled
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
            Your payment was cancelled before it was completed. No charges have
            been made and your reservation has not been confirmed.
          </Typography>

          <Divider sx={{mb: 4}}/>

          <Stack spacing={2} sx={{mb: 5}}>
            {[
              "No payment has been charged.",
              "Your reservation is not confirmed.",
              "You can try the payment again anytime.",
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
                    bgcolor: "#EF4444",
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
              to={ROUTES_PATHS_DATA.home}
              variant="contained"
              color="error"
              startIcon={<ReplayRoundedIcon/>}
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
              Try Again
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

export default CancelPayment;