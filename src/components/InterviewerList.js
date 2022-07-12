import React from 'react';
import InterviewerListItem from './InterviewerListItem';
import 'components/InterviewerList.scss'

const InterviewerList = (props) => {

  const interviewers = props.interviewers.map((interviewer) => {

    return(
      <InterviewerListItem 
      key={interviewer.id}
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={props.interviewer === interviewer.id}
      setInterviewer={props.setInterviewer}
      />
    );
  });


  return(
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers}
      </ul>
    </section>
  )
}

export default InterviewerList;