import React from 'react';
import classNames from 'classnames';

import 'components/DayListItem.scss';

export default function DayListItem(props) {
  let name = props.name;
  let spots = props.spots;
  let setDay = props.setDay;
  let listItemClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': spots === 0
  });
  
  return(
    <li onClick={() => setDay(name)} className={listItemClass} selected={props.selected} data-testid="day">
      <h2 className="text--regular">{name}</h2>
      {/* Conditional rendering for how many spots remain for each day */}
      {spots === 0 && <h3 className="text--light">no spots remaining</h3>}
      {spots === 1 && <h3 className="text--light">{spots} spot remaining</h3>}
      {spots > 1 && <h3 className="text--light">{spots} spots remaining</h3>}
    </li>
  );
};