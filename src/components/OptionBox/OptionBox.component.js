import CountBox  from '../CountBox/CountBox.component'
import { StyledOptionBox } from './OptionBox.styles'

const OptionBox = () => {
  return (
    <StyledOptionBox> 
      <div>
        <h4>Queijo cheddar</h4>
        <p>+ R$4,99</p>
      </div>
      <CountBox width={110}/>
    </StyledOptionBox>
  )
}

export default OptionBox;