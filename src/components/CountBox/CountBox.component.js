import { StyledCountBox } from "./CountBox.styles";
import Image from 'next/image.js';


const CountBox = (props) => {
  return (
    <StyledCountBox width={props.width}>
      <button><Image src="/minusButton.svg" alt="plusButton" width={14} height={14}></Image></button>        
      <div>1</div>
      <button><Image src="/plusButton.svg" alt="plusButton" width={14} height={14}></Image></button>          
    </StyledCountBox>
  )
}

export default CountBox;