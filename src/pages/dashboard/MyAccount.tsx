import {Box, Typography} from "@mui/material";

const MyAccount = ({name, role}: { name: string, role: string }) => {

  return (
    <Box sx={{py: '20px', px: '20px'}}>
      {
        role === 'admin' ?
          <Box
            sx={{
              mb: '20px',
              textAlign: {
                xs: 'center',
                md: 'start',
              },
            }}
          >
            <Typography
              sx={{
                fontSize: '36px',
                color: '#1A1A1A',
                fontWeight: 'bold',
                mb: '30px',
              }}
            >
              Welcome back,{" "}
              <Typography
                component="span"
                sx={(theme) => ({
                  color: theme.palette.brand.primary,
                  fontSize: '36px',
                  textTransform: 'capitalize',
                  fontWeight: 'bold',
                })}
              >
                {name}
              </Typography>{" "}
              👋
            </Typography>

            <Typography
              sx={{
                color: '#595959',
                lineHeight: '1.8',
                maxWidth: '800px',
              }}
            >
              Welcome back! Use the menu on the left to manage users, review and approve
              property requests, oversee all properties, monitor platform statistics, and
              keep your administrator account up to date.
            </Typography>
          </Box> :
          <Box sx={{
            mb: '20px', textAlign: {
              xs: 'center',
              md: 'start'
            }
          }}>
            <Typography sx={{fontSize: '36px', color: '#1A1A1A', fontWeight: 'bold', mb: '30px'}}>
              Welcome back, <Typography component={'span'} sx={(theme) => ({
              color: theme.palette.brand.primary,
              fontSize: '36px',
              textTransform: 'capitalize',
              fontWeight: 'bold'
            })}>{name}</Typography> 👋
            </Typography>
            <Typography sx={{
              color: '#595959',
              lineHeight: '1.8',
              maxWidth: '800px'
            }}>
              Welcome back! Use the menu on the left to manage your account, update your personal information, view
              your
              saved properties, manage your bookings, track your reviews, and access all your account features.
            </Typography>
          </Box>
      }
    </Box>
  );
};
/*


Manage your account, update your personal information,
and view your saved properties from the menu on the left.
* */
export default MyAccount;