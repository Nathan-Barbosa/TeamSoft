import { useState } from "react";
import { StyledCountBox } from "./CountBox.styles";
import Image from 'next/image.js';

const CountBox = (props) => {

  const [ counter, setCounter ] = useState(0);
  const increase = () => {
    if(counter < 8){
      setCounter(counter => counter + 1);
    }
  }
  
  const decrease = () => {
    if (counter > 0) {
      setCounter(count => count - 1);
    }
  }
  
  return (
    <StyledCountBox width={props.width}>
      <button onClick={decrease}><Image src="/minusButton.svg" alt="plusButton" width={14} height={14}></Image></button>        
      <div>{counter}</div>
      <button onClick={increase}><Image src="/plusButton.svg" alt="plusButton" width={14} height={14}></Image></button>          
    </StyledCountBox>
  )
}

export default CountBox;