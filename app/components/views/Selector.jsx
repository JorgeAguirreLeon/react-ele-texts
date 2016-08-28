import React          from 'react'
import Data           from '../../utils/Data'
import Session        from '../../utils/Session'


export default class Selector extends React.Component {
  constructor(props) {
    super(props);
    //Initial state
    this.state = {
      active_text: ''
    };
  }

  componentWillMount() {
    if (window.location.search != '?') window.location.search = '?';
    const active_text = Session.getActiveText();
    this.setState({active_text: active_text});
  }

  getDifficulty(difficulty) {
    const difficulties = [
      <span className='text-uppercase label label-success'>fácil</span>,
      <span className='text-uppercase label label-warning'>medio</span>,
      <span className='text-uppercase label label-danger'>difícil</span>
    ];
    if (difficulty === 'easy') return difficulties[0];
    if (difficulty === 'medium') return difficulties[1];
    return difficulties[2];
  }

  clickHandler(text_id) {
    Session.saveActiveText(text_id);
    this.setState({active_text: text_id});
  };

  render() {
    const self = this;
    const active_text = this.state.active_text;

    const rows = Data.texts.map((text, i)=> {
      const activo = text.id === active_text;
      const difficulty = this.getDifficulty(text.difficulty);
      const button_class = 'btn btn-sm btn-success text-uppercase';

      const activo_button = activo ?
        <button type='button' className={button_class} disabled='disabled'>Activado</button>
        :
        <button onClick={this.clickHandler.bind(self, text.id)} type='button' className={button_class}>Activar</button>;

      return (
        <tr key={i}>
          <td>{text.title}</td>
          <td className='text-center'>{difficulty}</td>
          <td className='text-center'>{text.tests.length}</td>
          <td className='text-center'>{activo_button}</td>
        </tr>
      );
    })

    return (
      <table className='table table-responsive table-striped'>
        <thead>
          <tr>
            <th>Texto</th>
            <th className='text-center'>Dificultad</th>
            <th className='text-center'>Apartados</th>
            <th className='text-center'>Estado</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }

}
