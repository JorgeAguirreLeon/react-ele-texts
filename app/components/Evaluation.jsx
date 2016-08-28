import React            from 'react';

import Blockquote       from './Blockquote'
import Answer           from './Answer'
import ProgressBar      from './ProgressBar'
import Alert            from './Alert'

export default class Evaluation extends React.Component {

  constructor(props) {
    super(props);
    //Initial state
    this.state = {
      activeTest: 0
    };
    this.getCompletion = this.getCompletion.bind(this);
    this.isFinished = this.isFinished.bind(this);
    this.getActiveTest = this.getActiveTest.bind(this);
    this.rightAnswerHandler = this.rightAnswerHandler.bind(this);
    this.renderActiveTest = this.renderActiveTest.bind(this);
  }

  getCompletion() {
    if (this.state.activeTest === this.props.tests.length) return 100;
    else return (this.state.activeTest / this.props.tests.length) * 100;
  }

  isFinished() {
    return this.getCompletion() === 100;
  }

  getActiveTest() {
    return (this.getCompletion() < 100) ? this.props.tests[this.state.activeTest] : null;
  }

  rightAnswerHandler() {
    let self = this;
    const timeout_cb = ()=> {self.setState({activeTest: (self.state.activeTest + 1)}); };
    setTimeout(timeout_cb, 1000);
  }

  renderActiveTest() {
    if (this.isFinished())
      return (<Alert type='success' text='Enhorabuena, has completado este ejercicio'/>);
    else {
      const active_test = this.getActiveTest();
      const title = (active_test.request === 'all') ? `Identifica los ${active_test.word_type} en el texto` : `Identifica al menos ${active_test.request} ${active_test.word_type} en el texto`;
      return [
        <h2 key='title' className='instructions-subtitle'>{title}</h2>,
        <Answer key='answer' answer={active_test.answer} request={active_test.request} onRightAnswer={this.rightAnswerHandler}/>
      ]
    }
  }

  render() {
    return (
      <div className='instructions'>
        <h1 className='instructions-title'>Lee el texto mostrado a continuación</h1>
        <Blockquote text={this.props.text} title={this.props.title}/>
        <h3 className='instructions-progress'>Progreso</h3>
        <ProgressBar completion={this.getCompletion()} />
        {this.renderActiveTest()}
      </div>
    );
  }
}

Evaluation.propTypes = {
  difficulty: React.PropTypes.string.isRequired,
  tests: React.PropTypes.array.isRequired,
  text: React.PropTypes.array.isRequired,
  title: React.PropTypes.string.isRequired
}
