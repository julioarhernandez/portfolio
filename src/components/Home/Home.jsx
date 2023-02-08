import {motion} from "framer-motion";
import "./Home.scss";
import homeData from "../../data/home";

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
};

const variantsLi = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {
                // stiffness: 1000,
                // velocity: -100,
                staggerChildren: 0.05}
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {
                // stiffness: 1000,
                // velocity: -100,
                staggerChildren: 0.05,}
        }
    }
};

const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
}

const listOfAsideItems = homeData.links.map((item, index) =>
        <motion.li
            variants={variantsLi}
            key={`li-${index}`}
            className="Home-menu-item"
        >
            <a href={item.link} className="link link-sawtooth" target="_blank">{item.label}</a>
        </motion.li>
);

const Home = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            className="Home"
        >
            <motion.div
                className="heading"
                variants={item}
            >
                <span>{homeData.headerTitle}</span>
                <span className="heading-highlighted">{homeData.headerTitleName}</span>

            </motion.div>
            <motion.div
                className="heading  heading-transparent"
                variants={item}
            >
                {homeData.headerSubtitle}

            </motion.div>
            <motion.div
                className="content"
                variants={item}
                dangerouslySetInnerHTML={{__html: homeData.content}}>
            </motion.div>
            <div className="Home-menu-aside">
                <motion.ul
                    variants={item}
                >
                    {listOfAsideItems}
                </motion.ul>
            </div>
        </motion.div>


    )
}
export default Home;