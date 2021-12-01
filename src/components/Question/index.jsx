import React from 'react'
import {QuestionBox, Question, Description, OptionsBox, Option} from './styles'

const QuestionComponent = ({question, handleOptionClick}) => {
  return (
    <>
      <QuestionBox>
        <Question>{question.questionText}</Question>
        <Description>{question.descriptionText}</Description>
      </QuestionBox>

      <OptionsBox>
        {question.answerOptions.map((option, index) => {
          return (
            <Option
              key={option.optionId}
              onClick={() => handleOptionClick(option.optionId)}
              $selected={option.selected}
            >
              {option.answerText}
            </Option>
          )
        })}
      </OptionsBox>
    </>
  )
}

export default QuestionComponent
