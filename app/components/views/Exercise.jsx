import React          from 'react'
import Evaluation     from '../Evaluation'
import Data           from '../../utils/Data'

const Exercise = (props)=> {

  return (
    <Evaluation
      text={Data.getText()}
      title={Data.getTitle()}
      difficulty={Data.getDifficulty()}
      tests={Data.getTests()}
    />
  );
}

export default Exercise;
