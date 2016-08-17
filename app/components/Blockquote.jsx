import React from 'react'

const Blockquote = (props)=> {

  const text_content = props.text.map((content, index)=> {
    return <p key={index}>{content}</p>
  });

  return (
    <blockquote>
      <h4 className='blockquote-title'>{props.title}</h4>
      {text_content}
    </blockquote>
  );
}

Blockquote.propTypes = {
  title: React.PropTypes.string,
  text: React.PropTypes.array
}

Blockquote.defaultProps = {
  title: '',
  text: []
}

export default Blockquote;
