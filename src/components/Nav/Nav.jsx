import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion"
import {MenuContext} from "../../contexts/contexts";

import "./Nav.scss";

const variantsMenu = {
    open: {opacity: 1, duration: 1},
    closed: {opacity: 0, duration: 3},
}
const variantsMenuIcon = {
    open: {opacity: 1, scale: 1},
    openLeaving: {opacity: 0, scale: 1.5, rotate: 10},
    closed: {opacity: 0, rotate: 0, scale: 0},
    closedLeaving: {opacity: 1, rotate: 90, scale: 1},
}
const variantsUl = {
    open: {
        transition: {staggerChildren: 0.07, delayChildren: 0.2}
    },
    closed: {
        transition: {staggerChildren: 0.05, staggerDirection: -1}
    }
};
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
            y: {stiffness: 1000}
        }
    }
};

const Nav = ({items}) => {
    const [open, setOpen] = useContext(MenuContext);

    const listOfItems = items.map((item, index) =>
        <li key={`li-${index}`} className="Nav-menu-item">
            <motion.div
                variants={variantsLi}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
                key={index}
                className="Nav-menu-item-wrapper"
            >
                <Link to={item.link}>{item.label}</Link>
            </motion.div>
        </li>
    );
    return (
        <nav className="Nav">
            <div className="Nav-icon">
                <AnimatePresence mode="in-out" >
                    <motion.svg
                        animate={open ? "openLeaving" : "open"}
                        key="openIcon"
                        variants={variantsMenuIcon}
                        className="Nav-icon-img"
                        viewBox="0 0 48 48"
                        width="32" height="32"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setOpen(open => !open)}>
                        <circle cx="12" cy="12" r="3"></circle>
                        <circle cx="12" cy="24" r="3"></circle>
                        <circle cx="12" cy="36" r="3"></circle>
                        <circle cx="24" cy="12" r="3"></circle>
                        <circle cx="24" cy="24" r="3"></circle>
                        <circle cx="24" cy="36" r="3"></circle>
                        <circle cx="36" cy="12" r="3"></circle>
                        <circle cx="36" cy="24" r="3"></circle>
                        <circle cx="36" cy="36" r="3"></circle>
                    </motion.svg>
                    <motion.svg
                        animate={open ? "closedLeaving" : "closed"}
                        variants={variantsMenuIcon}
                        key="closeIcon"
                        className="Nav-icon-img"
                        viewBox="0 0 24 24"
                        width="32" height="32"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setOpen(open => !open)}>
                        <path d="M6 6L18 18M18 6L6 18"></path>
                    </motion.svg>
                </AnimatePresence>
            </div>
            <motion.div
                animate={open ? "open" : "closed"}
                variants={variantsMenu}
                className="Nav-menu"
            >
                <div className="Nav-menu">
                    <motion.ul variants={variantsUl}>
                        {listOfItems}
                    </motion.ul>
                </div>
            </motion.div>

        </nav>
    )
}
export default Nav;