import {motion as m} from "framer-motion";
import "./Home.scss";
import homeData from "../../data/home";
import pageTransition from "../../motions/pageTransition";
import itemTransition from "../../motions/itemTransition";

const listOfAsideItems = homeData.links.map((item, index) =>
    <m.li key={`li-${index}`} className="Home-menu-item">
        <a href={item.link} className="link link-sawtooth">{item.label}</a>
    </m.li>
);

const Home = () => {
    return (
        <m.div initial="hidden" animate="visible" variants={pageTransition} className="Home">
            <m.div className="heading" variants={itemTransition}>
                <span>{homeData.headerTitle}</span>
                <span className="heading-highlighted">{homeData.headerTitleName}</span>
            </m.div>
            <m.div className="heading  heading-transparent" variants={itemTransition}>
                {homeData.headerSubtitle}
            </m.div>
            <m.div className="content" variants={itemTransition} dangerouslySetInnerHTML={{__html: homeData.content}}>
            </m.div>
            <div className="Home-menu-aside">
                <m.ul variants={itemTransition}>
                    {listOfAsideItems}
                </m.ul>
            </div>
        </m.div>
    )
}
export default Home;