import styled from 'styled-components'

export const StyledTextAnswer = styled.div`
  padding: 8px 16px;
  width: 100%;
`
export const TextAnswerOptions = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
`
export const TextAnswerOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 12px;

  input {
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50%;
    border: 1px solid #FEBC10;
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    position: relative;
  }

  input[type=checkbox]:checked:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: #F09035;
  }
`