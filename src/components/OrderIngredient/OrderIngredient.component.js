import { AddButton, AskText, IngredientButtons, IngredientOptions, OptionsHeader, StyledOrderIngredient} from './OrderIngredient.styles.js'
import CountBox  from '../CountBox/CountBox.component'
import OptionBox  from '../OptionBox/OptionBox.component'
import TextAnswer from '../TextAnswer/TextAnswer.component';
import { useState } from 'react';
import Popover from '../Popover/Popover.component';

const OrderIngredient = ({
  ingredientData
}) => {
  const [ show, setShow ] = useState(false)

  const handleAddProduct = () => {
    setShow(true)
  }

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
        <TextAnswer />

      </IngredientOptions>
      <IngredientButtons>
        <CountBox />
        <AddButton onClick={() => handleAddProduct()}>Adicionar</AddButton>
      </IngredientButtons>
      <Popover show={show}/>
    </StyledOrderIngredient>
  );
}

export default OrderIngredient;