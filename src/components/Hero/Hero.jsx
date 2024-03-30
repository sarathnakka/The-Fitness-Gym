import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter'
const Hero = () => {
    const transition =  {type: 'spring', duration: 3}
    const mobile = window.innerWidth<= 768 ? true:false;
    return (
        <div className="hero" id='home'>
            <div className="blur hero-blur">

            </div>
            <div className="left-h">
                <Header />
                {/* {The Best Add} */}
                <div className="the-best-ad">
                    <motion.div 
                    initial={{left: mobile? "165px" : "238px"}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type: 'tween'}}
                    ></motion.div>
                    <span>The Best Fitness Club in the Town</span>
                </div>
                {/* {Hero Heading} */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>
                {/* {figures} */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={140} start={100} delay ='4' preFix="+"/>
                        </span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={976} start={750} delay='4' preFix="+" />
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={50} start={35} delay='3' preFix="+" />
                        </span>
                        <span>fitness programs</span>
                    </div>
                    
                </div>
             {/* {Hero buttons} */}
             <div className="hero-buttons">
                <buttons className="btn">Get started</buttons>
                <buttons className="btn">Learn More</buttons>
             </div>
            </div>

            <div className="right-h">
                <button className="btn">Join Now</button>



                <motion.div
                initial={{right: "-1rem"}}
                whileInView={{right: "5rem"}}
                transition={transition} className="heart-rate">
                    <img src={Heart} alt='' />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                {/* {Hero images} */}
                <img src={hero_image} alt='' className="hero-image"/>
                <motion.img
                    initial={{ right: "26rem" }}
                    whileInView={{ right: "31.5rem" }}
                    transition={transition}
                
                src={hero_image_back} alt='' className="hero-image-back"/>
                {/* {Calories} */}
                <motion.div 
                    initial={{ right: "55rem" }}
                    whileInView={{ right: "45rem" }}
                    transition={transition}
                className="calories">
                    <img src={Calories} alt='' />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero;