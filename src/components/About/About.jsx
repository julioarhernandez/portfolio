import {motion, motion as m} from "framer-motion";
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

const listOfAsideItems = aboutData.skills.map((item, index) =>
    <li key={`li-${index}`} className="About-menu-item">
        <div className="About-menu-item-wrapper">
            <div className="About-menu-item-header subheading">
                {item.header}
            </div>
            <div className="About-menu-item-list">
                {
                    item.list.map( (skill, index, arr) => {
                        return skill + (index !== arr.length - 1 ? ', ': '');
                    })
                }
            </div>
        </div>
    </li>
);

const About = () => {
    return (
        <m.div className="About" initial="hidden" animate="visible" variants={list} >
            <m.div className="heading" variants={item} >
                {aboutData.header}
            </m.div>
            <m.div className="content" variants={item} dangerouslySetInnerHTML={{__html: aboutData.content}} />
            <m.ul className="list" variants={item}>
                {listOfAsideItems}
            </m.ul>
            <m.div className="aside" variants={item}>
                <a href="#" className="link link-sawtooth">Donwload resume</a>
            </m.div>
        </m.div>
    )
}
export default About;