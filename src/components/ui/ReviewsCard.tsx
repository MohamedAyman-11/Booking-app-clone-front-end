import {Box, Paper, Rating, Stack, Typography} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import dayjs from 'dayjs';
import StarIcon from '@mui/icons-material/Star';
import Avatar from '../layout/Avatar.tsx';
import type {UserReview} from '../../interfaces';
import MyReviewsCardAction from './MyReviewsCardAction.tsx';
import useCurrentUser from '../../hooks/user/useCurrentUser.ts';

interface Props {
  review: UserReview;
}

const ReviewsCard = ({review}: Props) => {
  const {
    data: {user},
  } = useCurrentUser();

  const items = [
    {label: 'Cleanliness', value: review.categories.cleanliness},
    {label: 'Accuracy', value: review.categories.accuracy},
    {label: 'Location', value: review.categories.location},
    {label: 'Value for money', value: review.categories.value},
    {label: 'Communication', value: review.categories.communication},
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'divider',
        mt: 2.5,
      }}
    >
      <Stack direction={{xs: 'column', lg: 'row'}} spacing={3} sx={{alignItems: 'flex-start'}}>
        {/* Property Image */}
        <Stack>
          <Box
            component={'img'}
            src={review.property.images[0].url}
            sx={{
              width: {
                xs: '100%',
                lg: 220,
              },
              height: {
                xs: 250,
                lg: 160,
              },
              borderRadius: 3,
              flexShrink: 0,
              mx: {
                xs: 'auto !important',
                lg: '0px !important',
              },
              objectFit: 'cover',
            }}
          />
          {user.role !== 'user' && (
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', mt: '10px'}}>
              <Avatar user={review.user}/>
              <Typography sx={{color: '#595959'}}>{review.user.name}</Typography>
            </Box>
          )}
        </Stack>
        {/* Content */}
        <Box sx={{flex: 1}}>
          <Typography
            sx={{
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            {review.property.name}
          </Typography>

          <Stack
            direction="row"
            spacing={0.5}
            sx={{
              mt: 1,
              color: 'text.secondary',
              alignItems: 'center',
            }}
          >
            <LocationOnOutlinedIcon fontSize="small"/>

            <Typography variant="body2">
              {review.property.location.city}, {review.property.location.country}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              mt: 2,
              alignItems: 'center',
            }}
          >
            <Rating readOnly precision={0.5} value={review.overAllRating}/>

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
              mt: 1,
              color: 'text.secondary',
            }}
          >
            Reviewed on {dayjs(review.createdAt).format('MMM DD, YYYY')}
          </Typography>

          <Typography
            sx={{
              mt: 2,
              mb: 1,
              lineHeight: 1.7,
              fontSize: 17,
            }}
          >
            {review.message}
          </Typography>

          <Stack
            direction="row"
            sx={{
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            {items.map((item) => (
              <Paper
                key={item.label}
                variant="outlined"
                sx={{
                  px: 2,
                  py: 1.2,
                  borderRadius: 3,
                  minWidth: 180,
                }}
              >
                <Stack
                  direction="row"
                  sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography sx={{fontWeight: 500}}>{item.label}</Typography>

                  <Stack
                    direction="row"
                    spacing={0.5}
                    sx={{
                      alignItems: 'center',
                    }}
                  >
                    <StarIcon
                      sx={{
                        color: '#f5b50a',
                        fontSize: 18,
                      }}
                    />

                    <Typography sx={{fontWeight: 700}}>{item.value.toFixed(1)}</Typography>
                  </Stack>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Box>
        {user.role !== 'host' && <MyReviewsCardAction review={review}/>}
      </Stack>
    </Paper>
  );
};

export default ReviewsCard;
