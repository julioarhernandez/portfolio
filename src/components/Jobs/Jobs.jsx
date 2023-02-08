import {motion} from "framer-motion";
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
            <motion.div
                className="heading"
                variants={item}
            >
                {jobsData.header}
            </motion.div>
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
        </motion.div>
    )
}
export default Jobs;