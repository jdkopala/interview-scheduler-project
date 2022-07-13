import React from 'react';

const Header = (props) => {
  
  return(
    <header className='appointment_time'>
      <h4 className='test--semi-bold'>{props.time}</h4>
      <hr className='appointment__separator' />
    </header>
  );
};

export default Header;