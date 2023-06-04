import CountBox  from '../CountBox/CountBox.component'
import { StyledOptionBox } from './OptionBox.styles'

const OptionBox = ({ingredient, value}) => {
  return (
    <StyledOptionBox> 
      <div>
        <h4>{ingredient}</h4>
        <p>+ {value.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</p>
      </div>
      <CountBox width={110}/>
    </StyledOptionBox>
  )
}

export default OptionBox;