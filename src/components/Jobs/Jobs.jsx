import {motion as m} from "framer-motion";
import {useIsLarge} from "../../hooks/useMediaQuery";
import Lottie from "lottie-react";
import lottieJobs from "../../lottieJobs.json";

import pageTransition from "../../motions/pageTransition";
import itemTransition from "../../motions/itemTransition";
import {cardVariantsLeft, cardVariantsRight, dateMotion, barMotion} from "../../motions/jobsTransition";

import "./Jobs.scss";
import jobsData from "../../data/jobs";

const Jobs = () => {
    const isLarge = useIsLarge();
    const listOfAsideItems = jobsData.jobs.map((item, index) =>
        <m.li key={`jobs-li-${index}`} className="Jobs-menu-item" initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.4 }}>
            <m.div className="Jobs-menu-item-bar" variants={barMotion}></m.div>
            <m.div variants={setVariant(index)} key={index} className="Jobs-menu-item-wrapper" >
                <div className="Jobs-menu-item-image">
                    <img alt={item.header} src={require('../../img/' + item.image)} />
                </div>
                <div className="Jobs-menu-item-header subheading">
                    {item.header}
                </div>
                <div className="Jobs-menu-item-position">
                    {item.position}
                </div>
                <m.div className="Jobs-menu-item-dates Jobs-menu-item-dates-top" variants={dateMotion}>
                    {item.endingDate}
                </m.div>
                <m.div className="Jobs-menu-item-dates Jobs-menu-item-dates-bottom" variants={dateMotion}>
                    {item.startingDate}
                </m.div>
                <div className="Jobs-menu-item-details">
                    {item.details}
                </div>

            </m.div>
        </m.li>
    );

    function setVariant(index){
        // by default is cardLeft. That's small breakpoint
        // and odd items in desktop
        let variant = cardVariantsLeft;
        if (isLarge) {
            // In desktop even items have right effects
            if (index % 2 === 0) {
                variant = cardVariantsRight;
            }
        }
        return variant;
    }

    return (
        <m.div initial="hidden" animate="visible" variants={pageTransition} className="Jobs" >
            <div className="Jobs-header">
                <m.div className="Jobs-header-image" variants={itemTransition}>
                    <Lottie animationData={lottieJobs} />
                </m.div>
                <m.div className="Jobs-header-title" variants={itemTransition} >
                    <span className="heading">
                        {jobsData.header}
                    </span>
                </m.div>
            </div>
            <div className="Job-content">
                <m.div className="content" variants={itemTransition} dangerouslySetInnerHTML={{__html: jobsData.content}}>
                </m.div>
                <div className="Jobs-menu-aside">
                    <m.ul variants={itemTransition} className="Jobs-menu-aside-list" style={{counterReset: `counter ${listOfAsideItems.length + 1}`}}>
                        {listOfAsideItems}
                    </m.ul>
                </div>
            </div>
        </m.div>
    )
}
export default Jobs;