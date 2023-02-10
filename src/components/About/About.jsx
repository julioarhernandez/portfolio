import React, { useRef, useEffect} from "react";
import {motion as m} from "framer-motion";
import Lottie from "lottie-react";
import lottieAbout from "../../lottieAbout.json";

import "./About.scss";
import aboutData from "../../data/about";

const list = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.05,
            delay: 1
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
        },
    },
}

const variantsLi = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    }
};
const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
}

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
                        item.list.map( (skill, index) => {
                            return (
                                <li className={`badge ${mapSkillsToStyleClasses[index]}`}
                                key={`about-li-item-${index}`}>
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
        <m.div className="About" initial="hidden" animate="visible" variants={list} >
            <div className="About-header">
                <m.div className="About-header-image" variants={item}>
                    <Lottie animationData={lottieAbout} />
                </m.div>
                <m.div className="About-header-title" variants={item} >
                    <span className="heading">
                        {aboutData.header}
                    </span>
                </m.div>
            </div>
           <div className="About-content">
               <m.div className="content" variants={item} dangerouslySetInnerHTML={{__html: aboutData.content}} />
               <m.ul className="list" variants={item}>
                   {listOfAsideItems}
               </m.ul>

           </div>
            <div className="About-aside">
                <m.div className="aside" variants={item}>
                    <a href="#" className="link link-sawtooth">Download resume</a>
                </m.div>
            </div>

        </m.div>
    )
}
export default About;