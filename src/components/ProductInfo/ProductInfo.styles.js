import styled from 'styled-components'
import { Media } from '../Media/Media.component'

export const StyledProductInfo = styled.div`
  display: flex;
  align-items:center;
  flex-direction: column;
  max-width: 597px;
  width: 100%;
  max-height: 662px;
  height: 100%;

 `
export const ProductItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  ${Media.tablet`
    img {
      max-width: 597px !important;
      width: 100%;
      object-fit: contain;
    }
  `}
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

  ${Media.tablet`
    font-size: 18px;
    line-height: 16px;
    margin-bottom: 16px;
  `}
`
export const ProductDescription = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  color: #4E4E4E;
  ${Media.tablet`
    font-size: 16px;
    line-height: 20px;  
    margin-bottom: 16px;
`}
`
export const ProductValue = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 17px;
`
export const ProductFullValue = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
  color: #4E4E4E;
  text-decoration-line: line-through;
  ${Media.tablet`
    font-size: 14px;
    line-height: 16px;
  `}
`
export const ProductOff = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
  color: #DC6E05;
  ${Media.tablet`
  font-size: 14px;
  line-height: 16px;
`}
`