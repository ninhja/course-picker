import React from 'react'
import {QuestionBox, Question, Description, OptionsBox, Option} from './styles'

const QuestionComponent = ({
  currentQuestionId,
  questionsData,
  answersData,
  handleOptionClick
}) => {
  const currentQuestion = questionsData[currentQuestionId]
  return (
    <>
      <QuestionBox>
        <Question>{currentQuestion.questionText}</Question>
        <Description>{currentQuestion.descriptionText}</Description>
      </QuestionBox>

      <OptionsBox>
        {answersData[currentQuestionId].map((option, index) => {
          return (
            <Option
              key={option.optionId}
              onClick={() => handleOptionClick(currentQuestionId, option.id)}
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
