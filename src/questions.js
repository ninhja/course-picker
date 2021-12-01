const questionTemplate = {
  questionText: '',
  descriptionText: '',
  answerOptions: [
    {answerText: ''},
    {answerText: ''},
    {answerText: ''},
    {answerText: ''},
    {answerText: ''}
  ],
  multiselect: true
}

export const questions = [
  {
    questionText: "What's your goal?",
    descriptionText: 'blah blah description',
    answerOptions: [
      {answerText: "Create something I'm proud of", nextQuestionId: 102},
      {
        answerText: 'Learn about a specific topic or skill',
        nextQuestionId: 103
      },
      {answerText: 'Explore a career pathway', nextQuestionId: 104}
    ],
    multiselect: true,
    id: 101
  },
  {
    questionText: 'What do you want to create?',
    descriptionText: 'question description here!',
    answerOptions: [
      {answerText: 'Websites'},
      {answerText: 'Mobile apps'},
      {answerText: 'Art'},
      {answerText: 'Visual designs'},
      {answerText: 'Software'}
    ],
    multiselect: true,
    id: 102
  },
  {
    questionText: 'What category of topics and skills are you interested in?',
    descriptionText: 'blah blah description',
    answerOptions: [
      {answerText: 'Code'},
      {answerText: 'Design'},
      {answerText: 'Working'}
    ],
    multiselect: true,
    id: 103
  },
  {
    questionText: 'What kind of career pathway do you want to explore?',
    descriptionText: 'blah blah description',
    answerOptions: [
      {answerText: 'Coding pathways'},
      {answerText: 'Design pathways'},
      {answerText: 'Project management pathways'}
    ],
    multiselect: true,
    id: 104
  }
]
