import {motion} from "framer-motion";
import "./Skills.scss";
import skillsData from "../../data/skills";

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

const listOfAsideItems = skillsData.skills.map((item, index) =>
    <li key={`li-${index}`} className="Skill-menu-item">
        <motion.div
            variants={variantsLi}
            key={index}
            className="Skill-menu-item-wrapper"
        >
            <div className="Skill-menu-item-header">
                {item.header}
            </div>
            <div className="Skill-menu-item-list">
                {
                    item.list.map( (skill, index, arr) => {
                        return skill + (index !== arr.length - 1 ? ', ': '');
                    })
                }
            </div>
        </motion.div>
    </li>
);

const Skills = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            className="Skills"
        >
            <motion.div
                className="heading"
                variants={item}
            >
                {skillsData.header}
            </motion.div>
            <motion.div
                className="content"
                variants={item}
                dangerouslySetInnerHTML={{__html: skillsData.content}}>
            </motion.div>
            <div className="Skills-menu-aside">
                <motion.ul
                    variants={item}
                >
                    {listOfAsideItems}
                </motion.ul>
            </div>
        </motion.div>
    )
}
export default Skills;