import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import "./eachbox.css"
function EachBox(props) {
  return (
    <>
        <Box
      sx={{
        display:'inline-block',
       
        '& > :not(style)': {
          m: 1,
          width: 80,
          height: 80,
        },
      }}
    >
      
      <Paper elevation={3} sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontFamily:'cursive',
        fontSize:'xx-large', backgroundColor:'#E3E6E3',
        '&:hover':{
            backgroundColor:'#51a151'
        }
      }} onClick={!props.val?()=>{props.onClick()}:()=>{}} >
      
   <h4 className={`banner ${props.val=="X"?"X":"O"}`}>{props.val}</h4>
      </Paper>
    </Box>
    </>
  )
}

export default EachBox