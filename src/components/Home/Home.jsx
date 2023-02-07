import {motion} from "framer-motion";
import "./Home.scss";


const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{opacity: 0, y:-20}}
            transition={{ duration: 1, delay: 1 }}
        >
            <div className="Home">
                <div className="heading">
                    Home
                </div>
                .
            </div>
        </motion.div>
    )
}
export default Home;