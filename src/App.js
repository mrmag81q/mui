

import styled from '@emotion/styled';
import Button from '@mui/material/Button'
 


function App() {
  const UseStyle = styled(Button)(({theme})=>({
      backgroundColor : theme.palette.primary.main,
      color : "white"
    }));
  return (
    <div>
      
      <UseStyle variant="contained" >
        s
      </UseStyle>
    
    </div>
  );
}

export default App;
