import { Avatar, AvatarGroup, Container, Typography } from '@mui/material';

const UseStyle = (theme) => ({
  Container: {
    paddingTop: theme.spacing(10),
  },
});
function Leftbar() {
  const classes = (e) => UseStyle(e);
  return (
    <Container sx={(theme) => classes(theme).Container}>
      <Typography>دوستان انلاین</Typography>
      <AvatarGroup max={3} sx={{ flexDirection: 'row' }}>
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
    </Container>
  );
}

export default Leftbar;
