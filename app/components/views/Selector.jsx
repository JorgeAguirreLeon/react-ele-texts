import React          from 'react'
import Data           from '../../utils/Data'
import Session        from '../../utils/Session'


const Selector = (props)=> {

  const active_text = Session.getActiveText();

  const clickHandler = (text_id)=> {
    Session.saveActiveText(text_id);
  };

  const rows = Data.texts.map((text, i)=> {
    const activo = text.id === active_text;

    const difficulties = [
      <span className='text-uppercase label label-success'>fácil</span>,
      <span className='text-uppercase label label-warning'>medio</span>,
      <span className='text-uppercase label label-danger'>difícil</span>
    ];

    const text_difficulty = text.difficulty === 'easy' ? 1 : text.difficulty === 'medium' ? 2 : 3;


    const activo_button = activo ?
      <button type='button' className='btn btn-sm btn-success text-uppercase' disabled='disabled'>Activado</button>
      :
      <button onClick={clickHandler.bind(this, text.id)} type='button' className='btn btn-sm btn-success text-uppercase'>Activar</button>;

    return (
      <tr key={i}>
        <td>{text.title}</td>
        <td className='text-center'>{difficulties[text_difficulty-1]}</td>
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

export default Selector;
