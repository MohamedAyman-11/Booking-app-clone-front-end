import type {Theme} from "@mui/material";

export const buttonTheme = (theme: Theme) => ({
  background: '#006ce4',
  color: '#fff',
  fontSize: {xs: '14px', sm: '16px'},
  fontWeight: 500,
  padding: '6px 0px',
  cursor: 'pointer',
  width: '100%',
  transition: 'all .3s',
  '&:hover': {
    background: theme.palette.brand.primary
  }
})

export const formContainerStyle = {
  maxWidth: '460px',
  mx: 'auto',
  boxShadow: '-3px 1px 100px 2px rgba(51, 51, 51, 0.2)',
  padding: '20px',
  borderRadius: '10px'
}
export const saveButtonStyle = {
  position: 'absolute',
  top: '8px',
  right: '5px',
  background: '#fff',
  borderRadius: '50%',
  width: '36px',
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': {
    background: '#ededed'
  }
  , zIndex: 9999
}

export const cardStyle = {
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
  paddingBottom: '8px',
  textDecoration: 'none',
  boxShadow: '0px 2px 8px 0px #1a1a1a29',
  position: 'relative',
  height: '100%'
}
export const listItemStyle = (theme: Theme) => ({
  borderRadius: '10px',
  '& svg': {
    width: '20px',
    height: '20px',
  },
  position: 'relative',
  '&:after': {
    position: 'absolute',
    content: '""',
    top: 0,
    left: '0',
    width: '4px',
    height: '0',
    background: theme.palette.primary.main,
    borderRadius: '20px',
    transition: 'all 0.3s ease'
  },
  '&.active': {
    bgcolor: 'rgb(0 87 184 / 5%)'
  },
  '&.active,&.active svg': {
    color: theme.palette.brand.primary
  },
  '&.active:after': {
    height: '100%'
  },
})

export const hostStackStyle = {
  border: '1px solid #ccc',
  mt: '15px',
  p: '5px 15px',
  borderRadius: '10px',
  justifyContent: 'space-between',
  rowGap: '20px',
  alignItems: {
    xs: 'flex-start',
    lg: 'center'
  },
  flexDirection: {
    xs: 'column',
    lg: 'row'
  }
}