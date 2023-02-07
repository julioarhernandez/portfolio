import {motion} from "framer-motion";
import "./About.scss";

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{opacity: 0, y:-20}}
            transition={{ duration: 1}}
        >
        <div className="About">
            <div className="heading">
                About
            </div>
        </div>
        </motion.div>
    )
}
export default About;