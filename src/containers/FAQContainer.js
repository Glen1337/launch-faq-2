import React from 'react';
import Question from '../components/Question';
import FormContainer from './FormContainer';


class FAQContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedQuestion: null,
      questions: []
    }
    this.toggleQuestionSelect = this.toggleQuestionSelect.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
  }

  addQuestion(question){
    fetch('/api/v1/questions', {
      method: 'POST',
      body: JSON.stringify(question)
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({questions: [...this.state.questions, responseData]})
    })
  }

  componentDidMount(){
    fetch('/api/v1/questions')
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({questions: json})
      });
  }

  toggleQuestionSelect(id) {
    if (id === this.state.selectedQuestion) {
      this.setState({ selectedQuestion: null})
    } else {
      this.setState({ selectedQuestion: id })
    }
  }

  render() {
    let addNewQuestion = (newQuestion) => this.addQuestion(newQuestion);

    let questions = this.state.questions.map(question => {

      let selected = false;
      if (this.state.selectedQuestion === question.id) {
        selected = true
      }

      let handleClick = () => { this.toggleQuestionSelect(question.id) }

      return(
        <Question
          key={question.id}
          question={question.question}
          answer={question.answer}
          selected={selected}
          handleClick={handleClick}
        />
      )
    })

    return(
      <div className='page'>
        <h1>We Are Here To Help</h1>
        <div className='question-list'>
          {questions}
        </div>
        <div className='form'>
          <FormContainer addQuestion={this.addQuestion}/>
        </div>
      </div>
    )
  }
}

export default FAQContainer;
