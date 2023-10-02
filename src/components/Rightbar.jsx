import {
  Bookmark,
  ExitToApp,
  Home,
  List,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
} from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';

const UseStyle = (theme) => ({
  text: {
    fontWeight: '500',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  icon: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      fontSize: '18px',
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(3),
      cursor: 'Pointer',
    },
  },
  Container: {
    position: 'sticky',
    top: '0',
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    color: 'white',
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'white',
      color: '#555',
      border: '1px solid #f8f8f8',
    },
  },
});
function Rightbar() {
  const classes = (e) => UseStyle(e);
  return (
    <Container sx={(theme) => classes(theme).Container}>
      <Box sx={(theme) => classes(theme).item}>
        <Home sx={(theme) => classes(theme).icon} />
        <Typography sx={(theme) => classes(theme).text}>خانه</Typography>
      </Box>
      <Box sx={(theme) => classes(theme).item}>
        <Person sx={(theme) => classes(theme).icon} />
        <Typography sx={(theme) => classes(theme).text}>دوستان</Typography>
      </Box>
      <Box sx={(theme) => classes(theme).item}>
        <List sx={(theme) => classes(theme).icon} />
        <Typography sx={(theme) => classes(theme).text}>لیست ها</Typography>
      </Box>
      <Box sx={(theme) => classes(theme).item}>
        <PhotoCamera sx={(theme) => classes(theme).icon} />
        <Typography sx={(theme) => classes(theme).text}>دوربین</Typography>
      </Box>
      <Box sx={(theme) => classes(theme).item}>
        <PlayCircleOutline sx={(theme) => classes(theme).icon} />
        <Typography sx={(theme) => classes(theme).text}>ویدیو</Typography>
      </Box>
      <Box sx={(theme) => classes(theme).item}>
        <TabletMac sx={(theme) => classes(theme).icon} />
        <Typography sx={(theme) => classes(theme).text}>اپ</Typography>
      </Box>
      <Box sx={(theme) => classes(theme).item}>
        <Bookmark sx={(theme) => classes(theme).icon} />
        <Typography sx={(theme) => classes(theme).text}>مجموعه ها</Typography>
      </Box>
      <Box sx={(theme) => classes(theme).item}>
        <Storefront sx={(theme) => classes(theme).icon} />
        <Typography sx={(theme) => classes(theme).text}>بازار</Typography>
      </Box>
      <Box sx={(theme) => classes(theme).item}>
        <Settings sx={(theme) => classes(theme).icon} />
        <Typography sx={(theme) => classes(theme).text}>تنظیمات</Typography>
      </Box>
      <Box sx={(theme) => classes(theme).item}>
        <ExitToApp sx={(theme) => classes(theme).icon} />
        <Typography sx={(theme) => classes(theme).text}>خروج</Typography>
      </Box>
    </Container>
  );
}

export default Rightbar;
