import React from "react";
import {motion as m} from "framer-motion";
import Lottie from "lottie-react";

import lottieAbout from "../../lottieAbout.json";
import aboutData from "../../data/about";
import pageTransition from "../../motions/pageTransition";
import itemTransition from "../../motions/itemTransition";

import "./About.scss";

const mapSkillsToStyleClasses = [
    "badge-primary-accent",
    "badge-secondary-accent",
    "badge-third-accent",
    "badge-fourth-accent"
];

const listOfAsideItems = aboutData.skills.map((item, index) =>
    <li key={`about-li-${index}`} className="About-menu-item">
        <div className="About-menu-item-wrapper">
            <div className="About-menu-item-header subheading">
                {item.header}
            </div>
            <ul className="About-menu-item-list">
                {
                    item.list.map( (skill, i) => {
                        return (
                            <li className={`badge ${mapSkillsToStyleClasses[index]}`}
                            key={`about-li-item-${i}`}>
                                {skill}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </li>
);

const About = () => {
    return (
        <m.div className="About" initial="hidden" animate="visible" variants={pageTransition} >
            <div className="About-header">
                <m.div className="About-header-image" variants={itemTransition}>
                    <Lottie animationData={lottieAbout} />
                </m.div>
                <m.div className="About-header-title" variants={itemTransition} >
                    <span className="heading">
                        {aboutData.header}
                    </span>
                </m.div>
            </div>
           <div className="About-content">
               <m.div className="content" variants={itemTransition} dangerouslySetInnerHTML={{__html: aboutData.content}} />
               <m.ul className="list" variants={itemTransition}>
                   {listOfAsideItems}
               </m.ul>

           </div>
            <div className="About-aside">
                <m.div className="aside" variants={itemTransition}>
                    <a href="#resume" className="link link-sawtooth">Download resume</a>
                </m.div>
            </div>
        </m.div>
    )
}
export default About;