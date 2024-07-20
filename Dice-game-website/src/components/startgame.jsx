import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button';

function Startgame({toggle}){
  return (
    <Container>
  <img src="./image/dice.png" />
     <div className='content'>
      <h1>DICE GAME</h1>
      <Button
      onClick={toggle} 
      >Play Now</Button>
     </div>
    </Container>
  )
}

export default Startgame
const Container=styled.div`

  max-width: 1180px;
  display: flex;
  margin-top: 100px ;
  margin-left: 240px;
  align-items: center;
  .content h1{
    font-size: 96px;
    white-space: nowrap;
  }
`;
 


