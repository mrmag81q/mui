import { Container } from '@mui/material';

const UseStyle = (theme) => ({
  Container: {
    paddingTop: theme.spacing(10),
  },
});
function Leftbar() {
  const classes = (e) => UseStyle(e);
  return <Container sx={(theme) => classes(theme).Container}>r</Container>;
}

export default Leftbar;
