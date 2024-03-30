import React from 'react'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import './Plans.css'
const Plans = () => {
  return (
    <div className="plans-container">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header" style={{gap: '3rem'}}>
              <span className="stroke-text">Ready  to start </span>
            <span>your journey </span>
            <span className="stroke-text">now with us</span>
        </div>
        {/* {Plans card} */}
        <div className="plans">
            {plansData.map((plan, i)=> (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>{plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt=''/>
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span>See benefits --{'>'} </span>
                    </div>
                    <button className='btn'>join Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans