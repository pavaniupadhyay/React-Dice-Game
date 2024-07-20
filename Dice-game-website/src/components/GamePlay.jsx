import styled from "styled-components"
import NumberSelecter from "./NumberSelecter"
import TotalScore from "./Total Score"
import RoleDice from "./RollDice"
import { useState } from "react"
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const[score,setscore]=useState(0);
  const [selectednumber,setselectednumber]=useState();
  const [currntdice,setcurrntdice]=useState(1);
  const [error,seterror]=useState();
  const [showRules, setShowRules] = useState(false);


  const GanrateRandomeNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min+1)+min);
  };
  const roledice=()=>{
    if (!selectednumber) {
      seterror("You have not selected any number");
      return;
    }
    const randomNumber=GanrateRandomeNumber(1,6);
    setcurrntdice((prev)=>randomNumber);

    if(selectednumber==randomNumber){
      setscore((prev)=>randomNumber);
    }else{
      setscore(prev=>prev-2);
    }
setselectednumber(undefined);
  }
  const resetScore = () => {
    setscore(0);
  };

  return (
   <MainContainer>
    <div className="top_section">
      <TotalScore score={score}/>
      <NumberSelecter
      selectednumber={selectednumber}
      setselectednumber={setselectednumber}
      error={error} 
      seterror={seterror}
      />
   </div>
   <RoleDice
   currntdice={currntdice}
   roledice={roledice}
   />
    <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
        {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules && <Rules/>}
   </MainContainer>
  )
}

export default GamePlay
const MainContainer=styled.main`
padding-top: 70px;
margin-right: 90px;
.top_section{
  display: flex;
  justify-content: space-between;
  align-items: end;
}
.btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;