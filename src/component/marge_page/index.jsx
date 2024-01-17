import React from 'react'
import style from "./style.module.scss";
import { Button, Input } from 'antd';


const index = () => {
  return (
    <div>
         <div className={style.HeadingDiv}>
            <h1 className={style.headingStyles}>Merge Customer</h1>
        </div>
        <div className={style.mainHeadingDiv}>
            <div className={style.customerHedingDiv}>
                <h4>Customer Selection</h4>
            </div>
            <div className={style.margeSectionDiv}>
                <div style={{width:"45%",marginTop:"13px"}}>
                    <h3>Orginal Customer</h3>
                    <Input placeholder='Enter Orginal Customer'/>
                </div>
                <dir style={{width:"45%"}}>
                    <h3>Duplicate Customer</h3>
                    <Input placeholder='Enter Duplicate Customer'/>
                </dir>
            </div>
                <div className={style.mergeButton}>
                    <Button className={style.mergeButtonStyles}>Merge Customers</Button>
              </div>
        </div>
    </div>
  )
}

export default index