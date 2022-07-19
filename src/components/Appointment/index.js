import React from 'react';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';
import useVisualMode from 'hooks/useVisualMode';
import "./styles.scss"

const EMPTY = 'EMPTY';
const SHOW = 'SHOW';
const CREATE = 'CREATE';
const SAVING = 'SAVING';
const CONFIRMDELETE = 'CONFIRMDELETE';
const DELETING = 'DELETING';
const EDIT = 'EDIT';
const ERROR_SAVE = 'ERROR_SAVE';
const ERROR_DELETE = 'ERROR_DELETE';

const Appointment = (props) => {

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function onAdd() {
    transition(CREATE);
  };

  function onCancel() {
    back();
  };

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW)
      })
      .catch((err) => {
        console.log(err)
        transition(ERROR_SAVE, true)
      });
  };

  function removeAppointment() {
    transition(CONFIRMDELETE);
  };

  function editAppointment() {
    transition(EDIT);
  };

  function destroy() {
    transition(DELETING, true);
    props.cancelInterview(props.id)
    .then(() => {
      transition(EMPTY)
    })
    .catch(() => {
      transition(ERROR_DELETE, true)
    });
  };

  return (
    <article className='appointment'>
      <Header time={props.time} />
      {mode === EMPTY && (
        <Empty 
          onAdd={onAdd} 
        />
      )}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={editAppointment}
          onDelete={removeAppointment}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={onCancel}
        />
      )}
      {mode === EDIT && (
        <Form
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onSave={save}
          onCancel={onCancel}
        />
      )}
      {mode === ERROR_SAVE && (
        <Error 
          message={'Error saving appointment'}
          onClose={onCancel}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error 
          message={'Error deleting appointment'}  
          onClose={onCancel}
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
          onConfirm={destroy}
          message={"Delete the appointment?"}
        />
      )}
    </article>
  );
};

export default Appointment;