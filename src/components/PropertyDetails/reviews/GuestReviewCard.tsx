import {Box, Chip, Paper, Rating, Stack, Typography,} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StarIcon from "@mui/icons-material/Star";
import dayjs from "dayjs";
import type {Review} from "../../../interfaces";
import Avatar from "../../layout/Avatar.tsx";

interface Props {
  review: Review;
}

const ReviewCard = ({review}: Props) => {
  const categories = [
    {label: "Cleanliness", value: review.categories.cleanliness},
    {label: "Accuracy", value: review.categories.accuracy},
    {label: "Location", value: review.categories.location},
    {label: "Value", value: review.categories.value},
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        mt: '20px'
      }}
    >
      <Stack
        direction={{xs: "column", md: "row"}}
        spacing={4}
        sx={{
          alignItems: {xs: 'center', md: 'flex-start'}
        }}
      >
        <Box sx={{minWidth: '230px'}}>
          <Stack spacing={2} sx={{alignItems: 'center'}}>
            <Stack direction="row" spacing={2}>
              <Avatar
                user={review.user}
              />
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: 22,
                  }}
                >
                  {review.user.name}
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    mt: 0.5,
                    color: "text.secondary",
                    alignItems: 'center'
                  }}
                >
                  <CalendarMonthIcon fontSize="small"/>

                  <Typography variant="body2">
                    {dayjs(review.createdAt).format("MMM YYYY")}
                  </Typography>
                </Stack>
              </Box>
            </Stack>

            <Chip
              color="success"
              icon={<VerifiedIcon/>}
              label="Verified booking"
              sx={{
                width: "fit-content",
                borderRadius: 10,
                fontWeight: 600,
              }}
            />
          </Stack>
        </Box>

        <Box sx={{flex: 1}}>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              mb: 2,
              alignItems: 'center',
              justifyContent: {xs: 'center', md: 'start'}
            }}
          >
            <Rating
              readOnly
              precision={0.5}
              value={review.overAllRating}
            />

            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 24,
              }}
            >
              {review.overAllRating.toFixed(1)}
            </Typography>
          </Stack>

          <Typography
            sx={{
              fontSize: 18,
              lineHeight: 1.7,
              mb: 3,
              textAlign: {xs: 'center', md: 'start'}
            }}
          >
            {review.message}
          </Typography>

          <Stack
            direction="row"
            sx={{
              flexWrap: "wrap",
              gap: 2,
              alignItems: 'center',
              justifyContent: {xs: 'center', md: 'start'}
            }}
          >
            {categories.map((item) => (
              <Paper
                key={item.label}
                variant="outlined"
                sx={{
                  px: 2,
                  py: 1.3,
                  borderRadius: 3,
                  minWidth: 165,
                }}
              >
                <Stack
                  direction="row"
                  sx={{alignItems: 'center', justifyContent: 'space-between'}}
                >
                  <Typography
                    sx={{
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={0.5}
                    sx={{alignItems: 'center'}}
                  >
                    <StarIcon
                      sx={{
                        color: "#f5b50a",
                        fontSize: 18,
                      }}
                    />

                    <Typography
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      {item.value.toFixed(1)}
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
};

export default ReviewCard;