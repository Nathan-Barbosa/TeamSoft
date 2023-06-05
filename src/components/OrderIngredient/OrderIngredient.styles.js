import styled from 'styled-components'
import { Media } from '../Media/Media.component'

export const StyledOrderIngredient = styled.div`
  display: flex;
  align-items:center;
  flex-direction: column;
  max-width: 439px;
  width: 100%;
  max-height: 662px;
  height: 100%;
  padding: 32px;
  gap: 21px;
  border: 1px solid #686868;
  border-radius: 8px;

  ${Media.tablet`
    border: none;
    padding: 0;
  `}
`

// ingredient options
export const IngredientOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  width: 100%;
  height: 537px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  
`
export const OptionsHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 8px 16px;
  background: rgba(253, 215, 14, 0.2);

  h4 {
    margin: 2px 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #E49700;
    margin: 0;
  }  
`

export const AskText = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: 100%;
padding: 8px 16px 24px 16px;
background: rgba(253, 215, 14, 0.2);
margin-top: 16px;

h4 {
  margin: 2px 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
}
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
  cursor: pointer;
`