import { useState } from "react"
import styled from "styled-components"

const NumberSelecter = ({seterror,error,selectednumber,setselectednumber}) => {
  const array=[ 1,2,3,4,5,6]

const numberSelectorHandler=(value)=>{
  setselectednumber(value);
  seterror("");
}
  return (
    <NumberSelectorContainer>
  <p className="error">{error}</p>
    <div className="flex">
      {array.map((value, i) => (
        <Box
          isSelected={value === selectednumber}
          key={i}
          onClick={() => numberSelectorHandler(value)}
        >
          {value}
        </Box>
      ))}
    </div>
    <p>Select Number</p>
  </NumberSelectorContainer>
   
  )
}

export default NumberSelecter;
const NumberSelectorContainer=styled.div`
 display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error{
    color:red;
  }
`;
const Box=styled.div`
  height: 72px;
  width: 72px;
  font-size: 24px;
  font-weight: 700;
  display: grid;
  place-items:center ;
  border:1px solid black;
  background-color: ${(props) => (props.isSelected? "black":"white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;