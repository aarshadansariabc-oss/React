import React from 'react'
import { ArrowUpRight } from "lucide-react";
import HeroText from './HeroText';
const Left = () => {
  return (
    <div className="h-full flex flex-col justify-between  w-1/3 ">
      <HeroText />
      <div>
        <ArrowUpRight size= {120} />
      </div>
    </div>
  );
}

export default Left
