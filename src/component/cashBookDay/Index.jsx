import React from 'react'
import style from "./style.module.scss";
import HeroSection from '../navbar/hero';


const Index = () => {
  return (
    <>
    <HeroSection/>
    <div style={{marginTop:"10px"}}> 
       <div className={style.HeadingDiv}>
          <h1 className={style.headingStyles}>Cash Book</h1>
          <input type="date" className={style.dateStyles} />
      </div>
    </div>
  </>)
}

export default Index