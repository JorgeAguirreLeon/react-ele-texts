import React            from 'react';
import TagsAnswer       from './TagsAnswer'
import Alert            from './Alert'


export default class Answer extends React.Component {

  constructor(props) {
    super(props);
    //Initial state
    this.state = {
      tags: [],
      alertVisible: false,
      alertText: '',
      alertType: 'info',
      disabledButton: false
    };
    this.handleTagsChange = this.handleTagsChange.bind(this);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.validAnswer = this.validAnswer.bind(this);
    this.arrayEquals = this.arrayEquals.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.answer !== this.props.answer) this.setState({tags: [], alertVisible: false, disabledButton: false});
  }

  handleTagsChange(tags) {
    this.setState({tags: tags, alertVisible: false})
  }

  handleAnswerClick(event) {
    let answer = this.props.answer.map((tag)=> { return tag.toLowerCase(); })
    let tags = this.state.tags.map((tag)=> { return tag.toLowerCase(); });
    answer.sort();
    tags.sort();
    const valid_answer = this.validAnswer(answer, tags);
    this.setState({alertVisible: true});
    if (valid_answer) {
      this.setState({alertText: '¡Correcto! Bien hecho', alertType: 'success', disabledButton: true});
      this.props.onRightAnswer();
    }
    else {
      this.setState({alertText: '¡Vaya! Revisa tu respuesta', alertType: 'danger'});
      this.props.onWrongAnswer();
    }
  }

  validAnswer(answer, tags) {
    if (this.props.request === 'all') return this.arrayEquals(answer, tags);
    else if (typeof this.props.request === 'number') return this.arrayContainsMinimum(answer, tags, this.props.request);
  }

  arrayEquals(array_1, array_2) {
    if (array_1.length !== array_2.length) return false;
    for (var index in array_1) if (array_1[index] !== array_2[index]) return false;
    return true;
  }

  arrayContainsMinimum(answer, tags, minimum) {
    const actual_minimum = Math.min(minimum, answer.length);
    if (tags.length < actual_minimum) return false;
    // If any of the tags is not valid then return no
    for (var i in tags)
      if (!(tags[i] in answer)) return false;
    // If all the tags are valid then check it's at least actual_minimum
    valid_tags = tags.length
    return valid_tags >= actual_minimum
  }

  render() {

    const disabled = (this.state.disabledButton) ? 'disabled' : null;

    const alert = (this.state.alertVisible) ? (
      <div className='col-xs-12'>
        <Alert text={this.state.alertText} visible={this.state.alertVisible} type={this.state.alertType}/>
      </div>
    ) : null;

    return (
      <div className='row'>
        <div className='col-xs-8 col-sm-8 col-md-9 col-lg-9'>
          <TagsAnswer onChange={this.handleTagsChange} tags={this.state.tags}/>
        </div>
        <div className='col-xs-4 col-sm-4 col-md-3 col-lg-3'>
          <button className='btn btn-block btn-primary btn-assert' onClick={this.handleAnswerClick} disabled={disabled}>Comprobar</button>
        </div>
        {alert}
      </div>
    );
  }
}

Answer.propTypes = {
  answer: React.PropTypes.array.isRequired,
  request: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  onRightAnswer: React.PropTypes.func,
  onWrongAnswer: React.PropTypes.func
}

Answer.defaultProps = {
  request: 'all',
  onRightAnswer: ()=>{},
  onWrongAnswer: ()=>{}
}
