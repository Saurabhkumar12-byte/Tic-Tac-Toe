import React from 'react'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { IconButton } from '@mui/material';
function Reset() {
  return (
    <div>
        <IconButton sx={{marginTop:'2rem',height:'4.8rem',width:'4.8rem',color:'red',backgroundColor:'#E3E6E3','&:hover':{
            backgroundColor:'#51a151'
        }}}
        onClick={()=>{
              location.reload()
            }}>
            <RestartAltIcon sx={{fontSize:'xx-large'}} ></RestartAltIcon>
        </IconButton>
    </div>
  )
}

export default Reset