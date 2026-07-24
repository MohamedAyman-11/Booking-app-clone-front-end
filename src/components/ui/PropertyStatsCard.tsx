import {alpha, Card, CardContent, Stack, Typography} from "@mui/material";
import type {ReactNode} from "react";

type Color =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info";

interface Props {
  mainIcon: ReactNode;
  secondaryIcon: ReactNode;
  title: string;
  value: number;
  color: Color;
}

const PropertyStatsCard = ({mainIcon, secondaryIcon, title, value, color}: Props) => {
  return (
    <Card
      elevation={0}
      sx={theme => ({
        border: "1px solid",
        borderColor: "grey.200",
        borderRadius: '10px',
        '& .MuiCardContent-root': {
          p: '10px 20px'
        },
        transition: 'all 0.3s ease',
        ':hover': {
          borderColor: theme.palette[color].light,
          transform: 'translateY(-5px) scale(1.03)'
        }
      })}
    >
      <CardContent>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",

          }}
        >
          <Stack direction="row" spacing={2} sx={{
            alignItems: "center"
          }}>
            <Stack
              sx={(theme) => ({
                width: 50,
                height: 50,
                borderRadius: "50%",
                bgcolor: alpha(theme.palette[color].light, 0.2),
                color: theme.palette[color].light,
                justifyContent: "center",
                alignItems: "center",
              })}
            >
              {mainIcon}
            </Stack>

            <Stack>
              <Typography sx={{fontWeight: 700, fontSize: 20}}>
                {value}
              </Typography>

              <Typography
                sx={(theme) => ({fontWeight: 600, color: theme.palette[color].light, fontSize: '18px'})}
              >
                {title}
              </Typography>

              <Typography
                sx={{fontSize: '16px'}}
                color="text.secondary"
              >
                Properties
              </Typography>
            </Stack>
          </Stack>
          {secondaryIcon}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PropertyStatsCard;