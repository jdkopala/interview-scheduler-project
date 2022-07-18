import React from 'react';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import "./styles.scss"
import useVisualMode from 'hooks/useVisualMode';

const EMPTY = 'EMPTY';
const SHOW = 'SHOW';
const CREATE = 'CREATE';

const Appointment = (props) => {

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function onAdd() {
    transition(CREATE);
  }

  function onCancel() {
    back();
  }

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    props.bookInterview(props.id, interview)
    transition(SHOW);
  };

  return(
    <article className='appointment'>
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={onAdd} />}
      {mode === SHOW && ( 
      <Show 
      student={props.interview.student} 
      interviewer={props.interview.interviewer} 
      />
    )}
      {mode === CREATE && (
      <Form 
      onSave={save} 
      interviewers={props.interviewers} 
      onCancel={onCancel} 
      />
    )}
    </article>
  );
};

export default Appointment;