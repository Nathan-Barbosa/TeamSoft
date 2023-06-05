import styled from 'styled-components';
import { Media } from '../Media/Media.component';

export const StyledPopover = styled.span`
  position: absolute;
  z-index: 2;
  width: 208px;
  top: -43px;
  right: -46px; 
  font-family: Roboto Condensed;
  filter: drop-shadow(0px -1px 4px rgba(0, 0, 0, 0.25));
  border-radius: 0px 0px 4px 4px;
  background: #F8F8F8;
  display: none;

  &.show {
    display: block;
    z-index: 900;
  }

  &::before {
    content: '';
    position: absolute;
    border: 8px solid;
    border-color: transparent transparent #F09035 transparent ;
    top: -14px;
    left: 45%;    
  }
  
  ${Media.tablet`
    &.show {
      display: none;
    }
    `
  }
`

export const PopoverHeader = styled.div`
  padding: 8px 11px;
  background: #F09035;
  width: 100%;
  
  h4 { 
    color: #FFFFFF;

    padding: 0;
    margin: 0;
  }
`
export const PopoverItemInfo = styled.div`
  padding: 8px 11px 0 8px;
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