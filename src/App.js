import React, {useState} from 'react'
import {
  GlobalStyle,
  Header,
  NavButton,
  H1,
  Footer,
  QuizBox,
  ContinueButton
} from './styles'
import Question from './components/Question'
import {questions} from './questions.js'
// import {courses} from './courses.js'

export default function App() {
  const getBlankQuestionsData = () =>
    questions.map((question) => ({
      ...question,
      answerOptions: question.answerOptions.map((answerOption, index) => ({
        ...answerOption,
        selected: false,
        optionId: question.id * 10 + index
      }))
    }))

  const [questionIndex, setQuestionIndex] = useState(0)
  const [questionsData, setQuestionsData] = useState(getBlankQuestionsData())

  const handleRestartClick = () => {
    setQuestionIndex(0)
    setQuestionsData(getBlankQuestionsData())
  }

  const handlePreviousQuestion = () => {
    const previousQuestionIndex = questionIndex - 1
    if (previousQuestionIndex >= 0) {
      setQuestionIndex(previousQuestionIndex)
    }
  }

  const handleNextQuestion = () => {
    const nextQuestionIndex = questionIndex + 1
    if (nextQuestionIndex < questions.length) {
      setQuestionIndex(nextQuestionIndex)
    }
  }

  const handleOptionClick = (optionId) => {
    console.log(optionId, questionsData[questionIndex])
    setQuestionsData(
      questionsData.map((question) =>
        question.id === questionsData[questionIndex].id
          ? {
              ...question,
              answerOptions: question.answerOptions.map(
                (answerOption, index) => ({
                  ...answerOption,
                  selected:
                    answerOption.optionId === optionId
                      ? !answerOption.selected
                      : answerOption.selected
                })
              )
            }
          : question
      )
    )
  }

  return (
    <>
      <GlobalStyle />

      <Header>
        <NavButton onClick={() => handlePreviousQuestion()}>Back</NavButton>
        <H1>Course Picker</H1>
        <NavButton onClick={handleRestartClick}>Restart</NavButton>
      </Header>

      <QuizBox>
        <Question
          question={questionsData[questionIndex]}
          handleOptionClick={handleOptionClick}
        />

        {questionsData[questionIndex].multiselect && (
          <ContinueButton type="submit" onClick={handleNextQuestion}>
            Continue
          </ContinueButton>
        )}
      </QuizBox>

      <Footer>
        {questionIndex + 1} / {questions.length}
      </Footer>
    </>
  )
}
