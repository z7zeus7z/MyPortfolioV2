import React from 'react'
import style from '../../styles/Home.module.css';
import StackIcon from "tech-stack-icons";

const ProcessCard = (props) => {
    const{name,index}=props;
  return (
    <>
        <div 
          className={style.processCard}
          style={{animationDelay:`${index*0.4}s, ${index*0.3}s`}}
        >
            <StackIcon  name={name} className={style.techIcon} />
        </div>
    </>
  )
}

export default ProcessCard