import styled from "styled-components"

const TotalScore = ({score}) => {
  return (
    <Scorecontainar>
      <h1>{score}</h1>
      <p>Total Score</p>
    </Scorecontainar>
  )
}

export default TotalScore
const Scorecontainar=styled.div`
max-width: 200px;
text-align: center;
padding-left: 50px;
  h1{
    font-size: 100px;
    line-height: 100px;
  }

  p{
    font-size: 24px;
    font-weight:500px ;
  }
`;
