import {motion} from "framer-motion";
import "./About.scss";
import aboutData from "../../data/about";

const list = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
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

const About = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            className="About"
        >
            <motion.div
                className="heading"
                variants={item}
            >
                {aboutData.header}
            </motion.div>
            <motion.div
                className="content"
                variants={item}
                dangerouslySetInnerHTML={{__html: aboutData.content}}>
            </motion.div>
            <motion.div
                className="aside"
                variants={item}
            >
                <a href="#">Donwload resume</a>
            </motion.div>
        </motion.div>
    )
}
export default About;