import React from 'react';

function NavPanel(props) {
  const {visible} = props;
  console.log(visible)
  return (
    <div className={`${
        visible ? 'block bg-[#f3efeb] h-[100vh] z-10 w-full absolute top-0' : 'hidden'
      }`}>
      <h2>this is the menu</h2>
    </div>
  );
}

export default NavPanel;
