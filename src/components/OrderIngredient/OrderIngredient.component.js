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

        <OptionBox ingredient="Queijo cheddar" value={4.99}/>
        <OptionBox ingredient="Bacon" value={2.50}/>
        <OptionBox />
        <OptionBox />
        <OptionBox />

        <TextInput type="text" placeholder="Precisa de talher?"></TextInput>
      </IngredientOptions>

      <IngredientButtons>
        <CountBox />
        <AddButton>Adicionar</AddButton>
      </IngredientButtons>
    </StyledOrderIngredient>
  );
}

export default OrderIngredient;