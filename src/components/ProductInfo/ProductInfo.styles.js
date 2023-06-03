import styled from 'styled-components'

export const StyledProductInfo = styled.div`
  display: flex;
  align-items:center;
  flex-direction: column;
  width: 597px;
  height: 662px;

 `
export const ProductItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
`
export const ProductTitle = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  color: #4E4E4E;
  height: 91.59159851074219px;
  width: 528.5574340820312px;


`
export const ProductDescription = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  height: 66px;
  width: 597px; 
  color: #4E4E4E;
`
export const ProductValue = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 17px;
height: 38px;
width: 249px;
`
export const ProductFullValue = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
  /* or 38px */

  display: flex;
  align-items: center;

color: #DC6E05;
`
export const ProductOff = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
  /* or 38px */

  display: flex;
  align-items: center;
  text-decoration-line: line-through;

  /* Gray darker */

  color: #4E4E4E;
`