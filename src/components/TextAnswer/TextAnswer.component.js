import { useState } from 'react';
import  { StyledTextAnswer, TextAnswerOption, TextAnswerOptions }  from './TextAnswer.styles';


const TextAnswer = () => {
  
  const [ isChecked, setIsChecked ] = useState(false);
  const checkHandler = (e) => {
    const check = e.target.value;

    if (check === 'sim') {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }

 return (
    <StyledTextAnswer>
      <TextAnswerOptions>
        <TextAnswerOption>
            <label name="sim">Sim</label>
            <input
            type="checkbox"
              id="checkbox"
              value="sim"
              checked={isChecked}
              onChange={checkHandler} 
              />
        </TextAnswerOption>

        <TextAnswerOption>
            <label name="nao">Não</label>
              <input
                type="checkbox"
                  id="checkbox"
                  value="nao"
                  checked={!isChecked}
                  onChange={checkHandler} />
        </TextAnswerOption>
      </TextAnswerOptions>
    </StyledTextAnswer>
 ) 
}

export default TextAnswer;