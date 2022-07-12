import React from 'react';
import classNames from 'classnames';
import 'components/InterviewerListItem.scss';

const InterviewerListItem = (props) => {

  const selectInterviewer = () => {
    props.setInterviewer(props.id)
  }

  const interviewerListItemClass = classNames('interviewers__item', {
    'interviewers__item--selected': props.selected,
  });

  return(
    <li onClick={selectInterviewer} className={interviewerListItemClass}>
      <img
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
      />
      {props.selected && <span>{props.name}</span>}
    </li>
  );
};

export default InterviewerListItem;