import React from 'react'

const ProgressBar = (props)=> {

  return (
    <div className='progress'>
      <div
        className='progress-bar progress-bar-success'
        role='progressbar'
        aria-valuenow={`${props.completion}`}
        aria-valuemin='0'
        aria-valuemax='100'
        style={{width: `${props.completion}%`}} />
    </div>
  );
}

ProgressBar.propTypes = {
  completion: React.PropTypes.number
}

ProgressBar.defaultProps = {
  completion: 0
}

export default ProgressBar;
