import styled from 'styled-components'
import { Media } from '../Media/Media.component';

export const StyledHeader = styled.header`
  background: #F4F4F4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  padding: 16px 40px;


`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  ${Media.tablet`
   justify-content: center;
  `
  }
  
`

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 70%;
  ${Media.tablet`
   display: none;
   
`
}
`

export const AddressContent= styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  max-width: 230px;
  width: 100%;
`
export const AdressTittle= styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 25px;
  color: #D80000;
  letter-spaceing: 0.2px;
`
export const Adress= styled.div`
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
  color: #656363;
`

export const SearchContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ED3237;
  border-radius: 4px;
  height: 48px;
  padding: 8px;
  width: 100%;

  input {
    background: none;
    color: #656363;
    max-width: 330px;
    width: 100%;
    outline: none;
  }
`

export const AccountContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  color: #ED3237;
`
export const CartContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  position: relative;
  color: #ED3237;
`
export const Cart = styled.div`
  position: relative;
  color: #FFFFFF
`
export const CartOrderCount = styled.div`
position: absolute;
top: -8px;
right: -8px;
z-index: 2;
font-size: 11px;
border-radius: 50%;
background: #F09035;
width: 16px;
height: 16px;
line-height:16px;
text-align: center;
`
export const HeaderSearchIcon = styled.svg`
  cursor: pointer;
  path {
    fill: #ED3237;
  }
`

export const HeaderInput = styled.input`
  background: #FFFFFF;
  border: none;
`