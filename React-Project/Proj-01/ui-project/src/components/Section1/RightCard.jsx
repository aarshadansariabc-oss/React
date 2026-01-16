import React from 'react'
import RightContent from './RightContent';

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-68 rounded-4xl">
      <img
        className="h-full w-full object-cover rounded-4xl"
        src= {props.img}
        alt=""
      />
      <RightContent tag = {props.tag} id = {props.id} />
    </div>
  );
}

export default RightCard
