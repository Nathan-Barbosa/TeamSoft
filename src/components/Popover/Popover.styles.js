import styled from 'styled-components';

export const StyledPopover = styled.span`
  position: absolute;
  z-index: 2;
  width: 208px;
  top: 38px;
  right: -90px;  
  font-family: Roboto Condensed;
  filter: drop-shadow(0px -1px 4px rgba(0, 0, 0, 0.25));
  border-radius: 0px 0px 4px 4px;
  background: #F8F8F8;
  // opacity: 0;
  // visibility: hidden;
  &::before {
    content: '';
    position: absolute;
    border: 8px solid;
    border-color: transparent transparent #F09035 transparent ;
    top: -14px;
    left: 45%;
    
  }
`

export const PopoverHeader = styled.div`
  padding: 8px 11px;
  background: #F09035;
  width: 100%;
  h4 { 
    padding: 0;
    margin: 0;
  }
`
export const PopoverItemInfo = styled.div`
  padding: 8px 11px;
  width: 100%;
  h5 {
    color: #BC2E31;
    font-size: 12px;
    line-height: 12px;
    padding: 0;
    margin: 0;
    }
`
export const PopoverBody = styled.div`
  font-family: Roboto Condensed;
  font-size: 12px;
  line-height: 12px;
  width: 100%;
  padding: 8px 11px;
  color: #4E4E4E;
  ul {
    padding: 0;
    margin: 4px 14px;
  }
`