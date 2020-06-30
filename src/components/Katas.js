import React, { Fragment } from 'react';
import TrainingList from './TrainingList';
import TrainingForm from './TrainingForm';

const Katas = () => {
  return (
    <Fragment>
      <TrainingList />
      <TrainingForm />
    </Fragment>
  );
};

export default Katas;