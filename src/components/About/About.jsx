import {motion} from "framer-motion";
import "./About.scss";

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{opacity: 0, scale: 0}}
            transition={{ duration: 1 }}
        >
        <div className="About">
            About
        </div>
        </motion.div>
    )
}
export default About;