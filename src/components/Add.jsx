import {
  Box,
  Button,
  Container,
  Fab,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Select,
  Snackbar,
  TextField,
  Tooltip,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';

import { AddBox } from '@mui/icons-material';
import { useState } from 'react';
import React from 'react';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={7} ref={ref} variant="filled" {...props} />;
});
const UseStyle = (theme) => ({
  fab: {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
  },
  Container: {
    width: 500,
    height: 550,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      height: '100vh',
      width: '100vw',
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
  select: {
    width: '100%',
  },
  label: {
    display: 'block',
    width: '93%',
    transformOrigin: 'top right',
  },
});
function Add() {
  const classes = (e) => UseStyle(e);
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const handleClick = () => {
    setOpenAlert(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickAway') {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <>
      <Tooltip title="Add" onClick={() => setOpen(true)}>
        <Fab color="primary" sx={(theme) => classes(theme).fab}>
          <AddBox />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container sx={(theme) => classes(theme).Container}>
          <form sx={(theme) => classes(theme).form} autoComplete="off">
            <Box sx={(theme) => classes(theme).item}>
              <TextField
                placeholder="عنوان"
                variant="standard"
                sx={{ width: '100%' }}
              />
            </Box>
            <Box sx={(theme) => classes(theme).item}>
              <TextField
                placeholder="پیام شما"
                multiline
                rows={4}
                variant="outlined"
                sx={{ width: '100%' }}
              />
            </Box>
            <Box sx={(theme) => classes(theme).item}>
              <FormControl
                sx={(theme) => classes(theme).select}
                variant="standard"
              >
                <InputLabel id="انتخاب" sx={(theme) => classes(theme).label}>
                  انتخاب
                </InputLabel>
                <Select>
                  <MenuItem value="public">عمومی</MenuItem>
                  <MenuItem value="خصوصی">خصوصی</MenuItem>
                  <MenuItem value="friends">نمایش برای دوستان</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={(theme) => classes(theme).item}>
              <FormLabel id="demo-radio-buttons-group-label">
                دسترسی کامنت گذاری؟
              </FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="برای همه"
                  control={<Radio size="small" />}
                  label="برای همه"
                />
                <FormControlLabel
                  value="برای دوستان"
                  control={<Radio size="small" />}
                  label="برای دوستان"
                />
                <FormControlLabel
                  value="هیچکس"
                  control={<Radio size="small" />}
                  label="هیچکس"
                />
                <FormControlLabel
                  value="دسترسی ویژه"
                  disabled
                  control={<Radio size="small" />}
                  label="دسترسی ویژه (برای اکانت های سفارشی)"
                />
              </RadioGroup>
            </Box>
            <Box sx={(theme) => classes(theme).item}>
              <Button
                variant="outlined"
                color="primary"
                sx={{ marginLeft: '10px' }}
                onClick={handleClick}
              >
                ارسال
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => setOpen(false)}
              >
                انصراف
              </Button>
            </Box>
          </form>
        </Container>
      </Modal>

      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          پست با موفقیت ارسال شد!
        </Alert>
      </Snackbar>
    </>
  );
}

export default Add;
