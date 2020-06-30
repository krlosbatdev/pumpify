import React, { useContext } from 'react';
import { TrainingContext } from '../contexts/TrainingContext';
//import trainingThumb from '../training.png';

const TrainingList = () => {
  const { trainings, deleteTraining } = useContext(TrainingContext);

  return (
    <div className='section section-trainings'>
      <div className='container'>
        <h6>Trainings</h6>
        <ul>
          {trainings.map(training => (
            <li key={training.id}>
              <div className='card training'>
                <div className='training-image'>
                  <i className='material-icons'>fitness_center</i>
                </div>
                <div className='training-details'>
                  <div className='training-title'>{training.day} - {training.target}</div>
                  <div className='training-author'>{training.level}</div>
                </div>
                <div
                  onClick={() => deleteTraining(training.id)}
                  className='training-delete'
                >
                  <i className='material-icons'>delete</i>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrainingList;