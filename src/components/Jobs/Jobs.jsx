import {motion, motion as m} from "framer-motion";
import Lottie from "lottie-react";
import lottieJobs from "../../lottieJobs.json";

import "./Jobs.scss";
import jobsData from "../../data/jobs";


const cardVariants= {
    offscreen: {
        x: 0,
        opacity: 0.3
    },
    onscreen: {
        x: 20,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const dateMotion = {
    offscreen: {
        opacity: 0,
    },
    onscreen: {
       opacity: 1
    }
};

const barMotion = {
    offscreen: {
        opacity: 0,
        height: 0
    },
    onscreen: {
        opacity: 1,
        height: '100%',
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 3,
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

    <m.li
        key={`jobs-li-${index}`}
        className="Jobs-menu-item"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
            once: false,
            amount: 0.4
        }}
    >
        <m.div
            className="Jobs-menu-item-bar"
            variants={barMotion}
        ></m.div>
        <m.div
            variants={cardVariants}
            key={index}
            className="Jobs-menu-item-wrapper"
        >
            <div className="Jobs-menu-item-image">
                <img src={require('../../img/ncl.jpg')} />
            </div>
            <div className="Jobs-menu-item-header subheading">
                {item.header}
            </div>
            <div className="Jobs-menu-item-position">
                {item.position}
            </div>
            <m.div
                className="Jobs-menu-item-dates Jobs-menu-item-dates-top"
                variants={dateMotion}>
                {item.endingDate}
            </m.div>
            <m.div
                className="Jobs-menu-item-dates Jobs-menu-item-dates-bottom"
                variants={dateMotion}>
                {item.startingDate}
            </m.div>
            <div className="Jobs-menu-item-details">
                {item.details}
            </div>

        </m.div>
    </m.li>
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
                <m.div className="Jobs-header-image" variants={item}>
                    <Lottie animationData={lottieJobs} />
                </m.div>
                <m.div className="Jobs-header-title" variants={item} >
                    <span className="heading">
                        {jobsData.header}
                    </span>
                </m.div>
            </div>
            <div className="Job-content">
                <motion.div
                    className="content"
                    variants={item}
                    dangerouslySetInnerHTML={{__html: jobsData.content}}>
                </motion.div>
                <div className="Jobs-menu-aside">
                    <motion.ul
                        variants={item}
                        className="Jobs-menu-aside-list"
                    >
                        {listOfAsideItems}
                    </motion.ul>
                </div>
            </div>

        </motion.div>
    )
}
export default Jobs;