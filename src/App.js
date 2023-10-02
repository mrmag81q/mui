
import { Grid } from '@mui/material';
import Navbar from './components/navbar';
import Rightbar from './components/Rightbar';
import Feed from './components/Feed';
import Leftbar from './components/Leftbar';
import Add from './components/Add';
const UseStyle = (theme)=>({
  left:{
    [theme.breakpoints.down('md')]: {
      display:"none"
    },
  }
})
function App() {
 const classes =(e)=>UseStyle(e);
  return (
    <div>
      <Navbar/>
      <Grid container>
        <Grid item md={2} sm={1} xs={1.5} >
          <Rightbar/>
        </Grid>
        <Grid item md={7} sm={11}  xs={10}>
          <Feed/>
        </Grid>
        <Grid item md={3} sx={(theme) => classes(theme).left}>
          <Leftbar/>
        </Grid>
      </Grid>

      <Add />
    </div>
  );
}

export default App;
