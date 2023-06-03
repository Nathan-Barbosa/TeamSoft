import { AddButton, IngredientButtons, IngredientOptions, OptionBox, OptionsHeader, StyledOrderIngredient, TextInput } from './OrderIngredient.styles.js'
import CountBox  from '../CountBox/CountBox.component'

const OrderIngredient = () => {
  return (
    <StyledOrderIngredient>
      <IngredientOptions>
        <OptionsHeader>
          <div>Adicionar Ingredientes</div>
          <div>Até 8 ingredientes</div>
        </OptionsHeader>
        <OptionBox> 
          <div>
            <div>Title</div>
            <div>Value</div>
          </div>
          <CountBox width={110}/>
        </OptionBox>
        
        <TextInput type="text" placeholder="Precisa de talher?">
        </TextInput>
      </IngredientOptions>

      <IngredientButtons>
        <CountBox />
        <AddButton>Adicionar</AddButton>
      </IngredientButtons>
    </StyledOrderIngredient>
  );
}

export default OrderIngredient;