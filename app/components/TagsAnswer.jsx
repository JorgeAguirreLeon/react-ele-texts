import React          from 'react'
import TagsInput      from 'react-tagsinput'

const TagsAnswer = (props)=> {

  const handleChange = (tags)=> { props.onChange(tags) };

  const renderTag = (_props)=> {
    if (_props.tag in props.highlight) className += ' higlighted-tag';
    return (
      <span key={_props.key} className={_props.className}>
        {_props.tag}
        <a onClick={(e) => _props.onRemove(_props.key)} />
      </span>
    );
  }

  return (
    <TagsInput
      value={props.tags}
      onlyUnique={true}
      onChange={handleChange}
      renderTag={renderTag}
      inputProps={{placeholder: props.placeholder}}
    />
  );
}

TagsAnswer.propTypes = {
  highlight: React.PropTypes.array,
  placeholder: React.PropTypes.string,
  tags: React.PropTypes.array,
  onChange: React.PropTypes.func
}

TagsAnswer.defaultProps = {
  highlight: [],
  placeholder: 'Añadir',
  tags: [],
  onChange: ()=>{}
}

export default TagsAnswer;
