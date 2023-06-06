import Image from 'next/image.js';
import { StyledHeader, HeaderItems, HeaderInput, HeaderSearchIcon, HeaderContainer, AdressTittle, Adress, CartOrderCount, Cart, SearchContent, AccountContent, AddressContent, CartContent } from './Header.styles.js'
import  Deliverize  from '../../../public/Deliverize.svg'
import keyboard_arrow_down_24px from '../../../public/keyboard_arrow_down_24px.svg'
import account_circle_24px from '../../../public/account_circle_24px.svg'
import shopping_cart_24px from '../../../public/shopping_cart_24px.svg'

const Header = () => {
  
  return (
    <StyledHeader>
      <HeaderContainer>
        <Image src={Deliverize} alt="Logo"/>
        <HeaderItems>

          <AddressContent>
            <div>
              <AdressTittle>Entrega:</AdressTittle>
              <Adress>R. Antonio Braune, 222</Adress>
            </div>
            <Image src={keyboard_arrow_down_24px} alt="searchArrowDownButton"></Image>
          </AddressContent>

          <SearchContent>
            <HeaderInput type="text" placeholder='Busque por estabelecimento ou produtos' />
            <HeaderSearchIcon width="24" height="24" viewBox="0 0 24 24" fill="none" >
              <path fillRule="evenodd" clipRule="evenodd" d="M14.965 14.255H15.755L20.745 19.255L19.255 20.745L14.255 15.755V14.965L13.985 14.685C12.845 15.665 11.365 16.255 9.755 16.255C6.165 16.255 3.255 13.345 3.255 9.755C3.255 6.165 6.165 3.255 9.755 3.255C13.345 3.255 16.255 6.165 16.255 9.755C16.255 11.365 15.665 12.845 14.685 13.985L14.965 14.255ZM5.255 9.755C5.255 12.245 7.26501 14.255 9.755 14.255C12.245 14.255 14.255 12.245 14.255 9.755C14.255 7.26501 12.245 5.255 9.755 5.255C7.26501 5.255 5.255 7.26501 5.255 9.755Z" fill="white"/>
            </HeaderSearchIcon>
          </SearchContent>
          
          <AccountContent>
            <Image src={account_circle_24px} alt=""></Image>
            <div>Entrar</div>
          </AccountContent>

          <CartContent>
              <Cart>
                <CartOrderCount>1</CartOrderCount>
                <Image src={shopping_cart_24px} alt="shoppingCartIcon"></Image>
              </Cart>
              <div>Carrinho</div>
          </CartContent> 

        </HeaderItems>        
      </HeaderContainer>
    </StyledHeader>
  )
}

export default Header;