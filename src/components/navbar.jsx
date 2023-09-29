import { Cancel, Mail, Notifications, Search } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import { Avatar, Badge, Box, alpha } from '@mui/material';
import { useState } from 'react';

const UseStyle = (theme, open) => ({
  Toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logoSm: {
    display: 'bock',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    padding: '5px',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      display: open ? 'flex' : 'none',
      width: '60%',
    },
  },
  input: {
    color: 'white',
    marginRight: theme.spacing(1),
    width: '100%',
  },
  icon: {
    alignItems: 'center',
    display: open ? 'none' : 'flex',
  },
  badge: {
    marginLeft: theme.spacing(2),
  },
  searchButton: {
    display: 'none',
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  Cancel: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
});
function Navbar() {
  const [open, setOpen] = useState(false);
  const classes = (e) => UseStyle(e, open);
  return (
    <AppBar>
      <Toolbar sx={(theme) => classes(theme).Toolbar}>
        <Typography variant="h6" sx={(theme) => classes(theme).logoLg}>
          وبلاگ مهدی
        </Typography>
        <Typography variant="h6" sx={(theme) => classes(theme).logoSm}>
          مهدی
        </Typography>
        <Box sx={(theme) => classes(theme).search}>
          <Search />
          <InputBase
            placeholder="جستجو کنید"
            sx={(theme) => classes(theme).input}
          />
          <Cancel
            sx={(theme) => classes(theme).Cancel}
            onClick={() => setOpen(false)}
          />
        </Box>
        <Box sx={(theme) => classes(theme).icon}>
          <Search
            sx={(theme) => classes(theme).searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge
            badgeContent={4}
            color="warning"
            sx={(theme) => classes(theme).badge}
          >
            <Mail />
          </Badge>
          <Badge
            badgeContent={4}
            color="warning"
            sx={(theme) => classes(theme).badge}
          >
            <Notifications />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRU6pBUUeNpri0ZMMqOWgezXavrS6W0gSEWuf6P2t25uzn5QvpDvx29fumBw8cBR2h80&usqp=CAU"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
