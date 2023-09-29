import { Container, Fab, Tooltip } from '@mui/material';
import Post from './post';
import { AddBox } from '@mui/icons-material';
const UseStyle = (theme) => ({
  fab: {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
  },
});
function Add() {
  const classes = (e) => UseStyle(e);
  return (
    <>
      <Tooltip title="Add">
        <Fab color="primary" sx={(theme) => classes(theme).fab}>
          <AddBox />
        </Fab>
      </Tooltip>
    </>
  );
}

export default Add;
