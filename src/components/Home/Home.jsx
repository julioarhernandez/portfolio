import {motion} from "framer-motion";
import "./Home.scss";


const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{opacity: 0, scale: 0}}
            transition={{ duration: 1 }}
        >
            <div className="Home">
                Home
            </div>
        </motion.div>
    )
}
export default Home;