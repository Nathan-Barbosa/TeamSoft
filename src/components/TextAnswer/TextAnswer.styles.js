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
    width: 1.3em;
    height: 1.3em;
    background-color: white;
    border-radius: 50%;
    border: 1px solid #F09035;
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
  }
`