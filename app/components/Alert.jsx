import React from 'react'

const Alert = (props)=> {

  if (!props.visible) return null;

  return (
    <div className={`alert alert-${props.type}`}>
      {props.text}
    </div>
  );
}

Alert.propTypes = {
  text: React.PropTypes.string.isRequired,
  type: React.PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
  visible: React.PropTypes.bool
}

Alert.defaultProps = {
  type: 'info',
  visible: true
}

export default Alert;
