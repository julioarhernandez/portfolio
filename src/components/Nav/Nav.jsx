import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion"
import {MenuContext} from "../../contexts/contexts";
import pagesData from "../../data/pages";

import "./Nav.scss";

const variantsMenu = {
    open: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            duration: 0.3,
        }
    },
    closed: {
        opacity: 0,
        transition: {
            when: "afterChildren",
            duration: 3
        }
    },
}
const variantsMenuIcon = {
    open: {opacity: 1, scale: 1},
    openLeaving: {opacity: 0, scale: 1.5, rotate: 10},
    closed: {opacity: 0, rotate: 0, scale: 0},
    closedLeaving: {opacity: 1, rotate: 90, scale: 1},
}
const variantsUl = {
    open: {
        transition: {
            when: "afterChildren",
            staggerChildren: 0.07,
            delayChildren: 0.4
        }
    },
    closed: {
        transition: {
            when: "afterChildren",
            staggerChildren: 0.05,
            staggerDirection: -1,
            duration: 3
        }
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
            y: {stiffness: 1000, velocity: -100}
        }
    }
};

const Nav = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useContext(MenuContext);

    const handleRouteLink = (url) => {
        setOpen(false);
        navigate(url);
    }
    const listOfItems = pagesData.pages.map((item, index) =>
        <li key={`li-${index}`} className="Nav-menu-item heading">
            <motion.div
                variants={variantsLi}
                key={index}
                className="Nav-menu-item-wrapper"
            >
                <a href="#" onClick={() => handleRouteLink(item.link)}>{item.label}</a>
            </motion.div>
        </li>
    );

    const listOfAsideItems = pagesData.contact.map((item, index) =>
        <li key={`li-${index}`} className="Nav-menu-item">
            <motion.div
                variants={variantsLi}
                key={index}
                className="Nav-menu-item-wrapper"
            >
                <a href={item.link} target="_blank">{item.label}</a>
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
                <div className="Nav-menu-list">
                    <motion.ul variants={variantsUl}>
                        {listOfItems}
                    </motion.ul>
                </div>
                <div className="Nav-menu-aside">
                    <motion.ul variants={variantsUl}>
                        {listOfAsideItems}
                    </motion.ul>
                </div>

            </motion.div>

        </nav>
    )
}
export default Nav;