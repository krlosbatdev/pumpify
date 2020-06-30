import React, { useContext, useState } from 'react';
import { TrainingContext } from '../contexts/TrainingContext';

const TrainingForm = () => {
  const { addTraining } = useContext(TrainingContext);

  const [training, setTraining] = useState({
    day: '',
    level: '',
    target: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    addTraining(training);
    setTraining({
      day: '',
      level: '',
      target: '',
    });
  };

  const handleChange = e => {
    setTraining({ ...training, [e.target.name]: e.target.value });
  };

  return (
    <div className='section'>
      <div className='container'>
        <h6>New Training</h6>
        <form onSubmit={handleSubmit}>
          <div className='input-field'>
            <input
              type='text'
              id='day'
              name='day'
              value={training.day}
              onChange={handleChange}
              placeholder='e.g. Monday'
              className='validate'
              required
            />
            <label className='active' htmlFor='day'>
              Day
            </label>
          </div>
          <div className='input-field'>
            <input
              type='text'
              id='target'
              name='target'
              value={training.target}
              onChange={handleChange}
              placeholder='e.g. Arms'
              className='validate'
              required
            />
            <label className='active' htmlFor='target'>
              Target
            </label>
          </div>
          <div className='input-field'>
            <input
              type='text'
              id='level'
              name='level'
              value={training.level}
              onChange={handleChange}
              placeholder='e.g. 2'
              className='validate'
              required
            />
            <label className='active' htmlFor='level'>
              Level
            </label>
          </div>

          <div className='input-field center'>
            <button
              type='submit'
              className='btn waves-effect waves-light amber darken-2'
            >
              <i className='material-icons right'>add_circle</i>Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrainingForm;