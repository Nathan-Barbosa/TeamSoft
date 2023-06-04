import  { StyledTextAnswer, TextAnswerOptions }  from './TextAnswer.styles';

const TextAnswer = () => {
 return (
    <StyledTextAnswer>
      <TextAnswerOptions>
        <span>Sim</span>
        <button type="checkbox" name="sim"></button>
      </TextAnswerOptions>

      <TextAnswerOptions>
        <span>Não</span>
        <button type="checkbox" name="sim"></button>
      </TextAnswerOptions>
    </StyledTextAnswer>
 ) 
}

export default TextAnswer;