import {Backdrop, Box} from "@mui/material";

const LoadingSpinner = () => {
  return (
    <Backdrop
      open
      sx={{
        zIndex: (theme) => theme.zIndex.modal + 999,
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(0,0,0,0.25)",
      }}
    >
      <Box
        sx={{
          width: 150,
          height: 140,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "rgba(255,255,255,.85)",
          backdropFilter: "blur(15px)",
          borderRadius: "24px",
          boxShadow: "0 10px 40px rgba(0,0,0,.15)",
          border: "1px solid rgba(255,255,255,.4)",
          p: 2,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          width="80"
          height="80"
        >
          <circle
            fill="#0057B8"
            stroke="#0057B8"
            strokeWidth="15"
            r="15"
            cx="40"
            cy="65"
          >
            <animate
              attributeName="cy"
              calcMode="spline"
              dur="0.8s"
              values="65;135;65"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-0.4s"
            />
          </circle>

          <circle
            fill="#0057B8"
            stroke="#0057B8"
            strokeWidth="15"
            r="15"
            cx="100"
            cy="65"
          >
            <animate
              attributeName="cy"
              calcMode="spline"
              dur="0.8s"
              values="65;135;65"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-0.2s"
            />
          </circle>

          <circle
            fill="#0057B8"
            stroke="#0057B8"
            strokeWidth="15"
            r="15"
            cx="160"
            cy="65"
          >
            <animate
              attributeName="cy"
              calcMode="spline"
              dur="0.8s"
              values="65;135;65"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </Box>
    </Backdrop>
  );
};

export default LoadingSpinner;