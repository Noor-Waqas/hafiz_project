import React from 'react'
import style from "./style.module.scss";

const Index = () => {
  return (
    <div> 
       <div className={style.HeadingDiv}>
          <h1 className={style.headingStyles}>Details Cash Book</h1>
          <input type="date" className={style.dateStyles} />
      </div>
    </div>
  )
}

export default Index