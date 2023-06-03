import styled from 'styled-components'

export const StyledOrderIngredient = styled.div`
  display: flex;
  align-items:center;
  flex-direction: column;
  width: 439px;
  height: 662px;
  padding: 32px;
  gap: 21px;
  border: 1px solid #686868;
  border-radius: 8px;
`

// ingredient options
export const IngredientOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 100%;
  height: 537px;
  overflow-y: scroll;
`
export const OptionsHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 55px;
  left: 0px;
  top: 0px;
  background: rgba(253, 215, 14, 0.2);

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #E49700;
  }  
`

export const TextInput = styled.input`
  width: 100%;
  height: 55px;
  left: 0px;
  top: 491px;
  background: rgba(253, 215, 14, 0.2);
  display: flex;
  align-items: center;
  border: none;
`
export const IngredientButtons = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  padding: 0px;
  gap: 16px;
  order: 1;
  align-self: stretch;
  height: 40px;
`

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background: #F09035;
  border-radius: 4px;
  border: 0;
  color: #FFFFFF;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
`