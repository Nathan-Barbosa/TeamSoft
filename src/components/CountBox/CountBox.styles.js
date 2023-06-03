import styled from 'styled-components'

export const StyledCountBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between ;
  height: 40px;
  border: 1px solid #F09035;
  border-radius: 4px;
  padding-inline: 13px;
  width: ${props => props.width ? props.width + "px" : "100%"};

  button {
    background: transparent;
    display: grid;
    place-items: center;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border: none;
  }
`