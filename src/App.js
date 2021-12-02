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
  //questionsData is a single object. Each key,value pair is a question's id and an object with the question details
  const getBlankQuestionsData = () =>
    questions.reduce((questionsData, currentQuestion) => {
      const {id, answerOptions, ...restOfCurrentQuestion} = currentQuestion
      return {
        ...questionsData,
        [id]: restOfCurrentQuestion
      }
    }, {})

  // answersData is a single object. Each key,value pair is a question's id and the question's answerOptions
  const getBlankAnswersData = () =>
    questions.reduce(
      (answers, currentQuestion) => ({
        ...answers,
        [currentQuestion.id]: currentQuestion.answerOptions.map(
          (answerOption, index) => ({
            ...answerOption,
            selected: false,
            id: currentQuestion.id * 100 + index
          })
        )
      }),
      {}
    )

  const startingQuestionId = 101
  const [currentQuestionId, setCurrentQuestionId] = useState(startingQuestionId)

  const [questionsQueue, setQuestionsQueue] = useState([startingQuestionId])
  const [currentQueueIndex, setCurrentQueueIndex] = useState(0)

  const [questionsData, setQuestionsData] = useState(getBlankQuestionsData())
  const [answersData, setAnswersData] = useState(getBlankAnswersData())

  const handleRestartClick = () => {
    setCurrentQuestionId(startingQuestionId)
    setQuestionsQueue([startingQuestionId])
    setCurrentQueueIndex(0)
    setQuestionsData(getBlankQuestionsData())
    setAnswersData(getBlankAnswersData())
  }

  const handlePreviousQuestion = () => {
    // const previousQuestionIndex = questionIndex - 1
    // if (previousQuestionIndex >= 0) {
    //   setQuestionIndex(previousQuestionIndex)
    // }
  }

  const addQuestionsToQueue = (newQuestionIds) => {
    const newQuestionsQueue = [...questionsQueue].concat(newQuestionIds)
    setQuestionsQueue(newQuestionsQueue)
  }

  const getNextQuestionIds = () => {
    // get array of selected options that have a nextQuestionId property
    const selectedOptions = answersData[currentQuestionId].filter(
      (option) => option.selected && option.nextQuestionId
    )
    // get array of nextQuestionId values from selected options
    const newQuestionIds = selectedOptions.map(
      (option) => option.nextQuestionId
    )

    // prevent adding duplicate questionIds in the questionsQueue by filtering them out
    const filteredIds = newQuestionIds.filter(
      (questionId) => !questionsQueue.includes(questionId)
    )

    return filteredIds
  }

  const handleOptionSelections = () => {
    addQuestionsToQueue(getNextQuestionIds())

    // TODO: remove questionIds that have been deselected
  }

  // TODO: for some reason I have to click twice for the state to update,
  // It might be because setting the state is async or something?
  const handleNextQuestion = () => {
    console.log(currentQueueIndex, currentQuestionId, questionsQueue)

    // add more questions to the questionsQueue based on selected options
    handleOptionSelections()

    const nextQueueIndex = currentQueueIndex + 1
    if (nextQueueIndex < questionsQueue.length) {
      setCurrentQueueIndex(nextQueueIndex)
      setCurrentQuestionId(questionsQueue[nextQueueIndex])
    }

    console.log(currentQueueIndex, currentQuestionId, questionsQueue)
  }

  const updateAnswersData = (questionId, updatedAnswer) => {
    setAnswersData((previousAnswers) => ({
      ...previousAnswers,
      [questionId]: updatedAnswer
    }))
  }

  const handleOptionClick = (currentQuestionId, optionId) => {
    const newAnswer = answersData[currentQuestionId].map((option) => ({
      ...option,
      selected: option.id === optionId ? !option.selected : option.selected
    }))
    updateAnswersData(currentQuestionId, newAnswer)
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
          currentQuestionId={currentQuestionId}
          questionsData={questionsData}
          answersData={answersData}
          handleOptionClick={handleOptionClick}
        />

        {questionsData[currentQuestionId].multiselect && (
          <ContinueButton type="submit" onClick={() => handleNextQuestion()}>
            Continue
          </ContinueButton>
        )}
      </QuizBox>

      <Footer>currentQuestionId: {currentQuestionId}</Footer>
    </>
  )
}
