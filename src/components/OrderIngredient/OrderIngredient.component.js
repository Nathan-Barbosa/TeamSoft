import { AddButton, AskText, IngredientButtons, IngredientOptions, OptionsHeader, StyledOrderIngredient} from './OrderIngredient.styles.js'
import CountBox  from '../CountBox/CountBox.component'
import OptionBox  from '../OptionBox/OptionBox.component'

const OrderIngredient = ({
  ingredientData
}) => {
  return (
    <StyledOrderIngredient>
      <IngredientOptions>

        <OptionsHeader>
          <h4>Adicionar Ingredientes</h4>
          <p>Até 8 ingredientes</p>
        </OptionsHeader>

        
        {ingredientData.map(item => (
          <OptionBox key={item.id} ingredient={item.nm_item} value={item.vl_item}></OptionBox>
        ))}

        <AskText >
          <h4>Precisa de talher?</h4>
        </AskText>
      </IngredientOptions>

      <IngredientButtons>
        <CountBox />
        <AddButton>Adicionar</AddButton>
      </IngredientButtons>
    </StyledOrderIngredient>
  );
}

export default OrderIngredient;