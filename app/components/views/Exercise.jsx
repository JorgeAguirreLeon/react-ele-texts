import React          from 'react'
import Evaluation     from '../Evaluation'
import Data           from '../../utils/Data'
import Session        from '../../utils/Session'

export default class Exercise extends React.Component {

  constructor(props) {
    super(props);
    //Initial state
    this.state = {
      active_text: {
        text: [],
        titile: '',
        difficulty: 'easy',
        tests: []
      }
    };
  }

  componentWillMount() {
    if (window.location.search != '?') window.location.search = '?';
    const text_id = Session.getActiveText();
    return Data.getTextWithId(text_id, (text)=> {
      this.setState({active_text: text});
    });
  }

  render() {
    return (
      <Evaluation
        text={this.state.active_text.text}
        title={this.state.active_text.title}
        difficulty={this.state.active_text.difficulty}
        tests={this.state.active_text.tests}
      />
    );
  }
}
