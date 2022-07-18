import React from 'react';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import "./styles.scss"
import useVisualMode from 'hooks/useVisualMode';

const EMPTY = 'EMPTY';
const SHOW = 'SHOW';
const CREATE = 'CREATE';
const SAVING = 'SAVING';
const CONFIRMDELETE = 'CONFIRMDELETE';
const DELETING = 'DELETING'

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
    transition(SAVING);
    const interview = {
      student: name,
      interviewer
    };
    props.bookInterview(props.id, interview);
    transition(SHOW);
  };

  function removeAppointment() {
    transition(CONFIRMDELETE);
  }

  function cancelInterview() {
    props.deleteInterview(props.id);
    transition(DELETING);
    transition(EMPTY);
  }

  return(
    <article className='appointment'>
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={onAdd} />}
      {mode === SHOW && ( 
      <Show 
      student={props.interview.student} 
      interviewer={props.interview.interviewer}
      onDelete={removeAppointment}
      />
      )}
      {mode === CREATE && (
      <Form 
      onSave={save} 
      interviewers={props.interviewers} 
      onCancel={onCancel} 
      />
      )}
      {mode === SAVING && (
        <Status message={"Saving"} />
      )}
      {mode === DELETING && (
        <Status message={"Deleting"} />
      )}
      {mode === CONFIRMDELETE && (
      <Confirm 
      onCancel={onCancel} 
      onConfirm={cancelInterview} 
      message={"Delete the appointment?"}
      />
      )}
    </article>
  );
};

export default Appointment;