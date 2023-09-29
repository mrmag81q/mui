import { Container } from '@mui/material';
import Post from './post';
const UseStyle = (theme) => ({
  Container: {
    paddingTop: theme.spacing(10),
  },
});
function Feed() {
  const classes = (e) => UseStyle(e);
  return (
    <Container sx={(theme) => classes(theme).Container}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}

export default Feed;
