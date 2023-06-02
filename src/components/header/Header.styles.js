import  styled  from 'styled-components'

export const StyledHeader = styled.header`
  width: 100vw;
  padding: 16px 0;
  background: #F4F4F4;
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const HeaderAddress= styled.div`
  display: block;
  margin-right: 24px;
`

export const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 24px;
`
export const HeaderAccount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 24px;
`
export const HeaderCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderSearchIcon = styled.svg`
  path {
    fill: #ED3237;
  }
`

export const HeaderInput = styled.input`
  background: #FFFFFF;
  /* Primary/default */

  border: 1px solid #ED3237;
  border-radius: 4px;
`