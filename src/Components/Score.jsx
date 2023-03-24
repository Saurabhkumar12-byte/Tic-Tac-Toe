// import { color } from '@mui/system'
import React from 'react'
import './score.css'

function Score() {
  return (
    <div style={{
    textShadow: "1px 1px 1px",fontFamily:'cursive',
        fontSize:'xx-large',
        display:'flex',
        alignContent:'center',
        justifyContent:'space-evenly',
        width:'17.2rem',
        padding:'.8rem',
        boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',borderRadius:'4px',
        margin:'1rem auto',
        backgroundColor:'#E3E6E3'}}>
        <div style={{color:'red'}}>Tic</div>
        <div style={{color:'blue'}}>Tac</div>
        <div style={{color:'red'}}>Toe</div>

        </div>
  )
}

export default Score