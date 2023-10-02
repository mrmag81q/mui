import {
  Avatar,
  AvatarGroup,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from '@mui/material';

const UseStyle = (theme) => ({
  Container: {
    paddingTop: theme.spacing(10),
  },
  title: {
    fontSize: '20px',
    fontWeight: 500,
    color: '#555',
  },
  ImageList: {
    left: 'auto',
    right: '50%',
    transform: 'translateX(50%)',
  },
  link: {
    fontSize: '18px',
    color: '#555',
    marginRight: '12px',
    textDecoration: 'none',
  },
});
function Leftbar() {
  const classes = (e) => UseStyle(e);
  return (
    <Container sx={(theme) => classes(theme).Container}>
      <Typography sx={(theme) => classes(theme).title} gutterBottom>
        دوستان انلاین
      </Typography>
      <AvatarGroup
        max={3}
        sx={{ flexDirection: 'row' }}
        style={{ marginBottom: '2rem' }}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://mui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/5.jpg"
        />
      </AvatarGroup>
      <Typography sx={(theme) => classes(theme).title} gutterBottom>
        گالری
      </Typography>
      <ImageList cols={3} rowHeight={164} style={{ marginBottom: '2rem' }}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={(theme) => classes(theme).ImageList}
          >
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={classes.ImageList}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography sx={(theme) => classes(theme).title} gutterBottom>
        دسته بندی ها
      </Typography>
      <Link
        component="button"
        href=""
        sx={(theme) => classes(theme).link}
        variant="body2"
      >
        ورزشی
      </Link>
      <Link
        component="button"
        href=""
        sx={(theme) => classes(theme).link}
        variant="body2"
      >
        سیاسی
      </Link>
      <Divider style={{ borderColor: 'white', marginBottom: '10px' }} />
      <Link
        component="button"
        href=""
        sx={(theme) => classes(theme).link}
        variant="body2"
      >
        علمی
      </Link>
      <Link
        component="button"
        href=""
        sx={(theme) => classes(theme).link}
        variant="body2"
      >
        هنری
      </Link>
    </Container>
  );
}
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
export default Leftbar;
