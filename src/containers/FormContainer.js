import React from 'react';
import InputField from '../components/Inputfield'

class FormContainer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      question: '',
      answer: ''
    }
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
    this.handleChangeAnswer = this.handleChangeAnswer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeQuestion(event){
    this.setState({question: event.target.value});
  }

  handleChangeAnswer(event){
    this.setState({answer: event.target.value});
  }

  handleClearForm(event){
    event.preventDefault();
    this.setState({answer: '', question: ''});
  }

  handleSubmit(event){
    event.preventDefault();
    debugger
    let newQuestion = {
      question: this.state.question,
      answer: this.state.answer
    }
    this.props.addQuestion(newQuestion);
    this.handleClearForm(event);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <InputField
          label='Question'
          content={this.state.question}
          handleChange={this.handleChangeQuestion}
        />
        <InputField
          label='Answer'
          content={this.state.answer}
          handleChange={this.handleChangeAnswer}
        />
        <input type= 'submit' value='Submit'/>
      </form>
    );
  }
}

export default FormContainer;
