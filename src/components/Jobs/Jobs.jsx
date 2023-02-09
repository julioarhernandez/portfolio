import {motion, motion as m} from "framer-motion";
import Lottie from "lottie-react";
import lottieJobs from "../../lottieJobs.json";

import "./Jobs.scss";
import jobsData from "../../data/jobs";

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
const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
}

const listOfAsideItems = jobsData.jobs.map((item, index) =>
    <li key={`li-${index}`} className="Jobs-menu-item">
        <motion.div
            variants={variantsLi}
            key={index}
            className="Jobs-menu-item-wrapper"
        >
            <div className="Jobs-menu-item-header subheading">
                {item.header}
            </div>
            <div className="Jobs-menu-item-position">
                {item.position}
            </div>
            <div className="Jobs-menu-item-dates">
                {item.dates}
            </div>
            <div className="Jobs-menu-item-details">
                {item.details}
            </div>

        </motion.div>
    </li>
);

const Jobs = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            className="Jobs"
        >
            <div className="Jobs-header">
                <m.div className="About-header-image" variants={item}>
                    <Lottie animationData={lottieJobs} />
                </m.div>
                <m.div className="Jobs-header-title" variants={item} >
                    <span className="heading">
                        {jobsData.header}
                    </span>
                </m.div>
            </div>
            <div className="About-content">
                <motion.div
                    className="content"
                    variants={item}
                    dangerouslySetInnerHTML={{__html: jobsData.content}}>
                </motion.div>
                <div className="Jobs-menu-aside">
                    <motion.ul
                        variants={item}
                    >
                        {listOfAsideItems}
                    </motion.ul>
                </div>
            </div>

        </motion.div>
    )
}
export default Jobs;