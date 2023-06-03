import { AddButton, IngredientButtons, IngredientOptions, OptionsHeader, StyledOrderIngredient, TextInput } from './OrderIngredient.styles.js'
import CountBox  from '../CountBox/CountBox.component'
import OptionBox  from '../OptionBox/OptionBox.component'

const OrderIngredient = () => {
  return (
    <StyledOrderIngredient>
      <IngredientOptions>
        <OptionsHeader>
          <h4>Adicionar Ingredientes</h4>
          <p>Até 8 ingredientes</p>
        </OptionsHeader>

        <OptionBox />
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