import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {motion as m} from "framer-motion"

import {MenuContext} from "../../contexts/contexts";
import pagesData from "../../data/pages";

import {variantsMenu, variantsMenuIcon, variantsUl, variantsLi} from "../../motions/navTransition";

import "./Nav.scss";

const Nav = ({activePath}) => {
    const navigate = useNavigate();
    const [open, setOpen] = useContext(MenuContext);
    const cleanActivePath = activePath.toLowerCase().replaceAll('/', '');

    const handleRouteLink = (url) => {
        setOpen(false);
        navigate(url);
    }

    const listOfItems = pagesData.pages.map((item, index) =>
        <li key={`li-${index}`} className="Nav-menu-item heading">
            <m.div variants={variantsLi} key={index} className="Nav-menu-item-wrapper" >
                <a href={() => false} className={cleanActivePath === item.slug ? "active" : ""} onClick={() => handleRouteLink(item.link)}>{item.label}</a>
            </m.div>
        </li>
    );

    const listOfAsideItems = pagesData.contact.map((item, index) =>
        <li key={`li-${index}`} className="Nav-menu-item-contact">
            <m.div variants={variantsLi} key={index} className="Nav-menu-item-wrapper" >
                <a href={item.link} className="link link-sawtooth"  target="_blank" rel="noreferrer">{item.label}</a>
            </m.div>
        </li>
    );
    return (
        <nav className="Nav">
            <div className="Nav-logo">
                {/*<img className="Nav-logo-img" src={logo} />*/}
                <span className="Nav-logo-text">JR</span>
            </div>
            <div className="Nav-icon">
                <m.svg
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
                </m.svg>
                <m.svg
                    animate={open ? "closedLeaving" : "closed"}
                    variants={variantsMenuIcon}
                    key="closeIcon"
                    className="Nav-icon-img"
                    viewBox="0 0 24 24"
                    width="32" height="32"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setOpen(open => !open)}>
                    <path d="M6 6L18 18M18 6L6 18"></path>
                </m.svg>
            </div>

            <m.div animate={open ? "open" : "closed"} variants={variantsMenu} className="Nav-menu" >
                <div className="Nav-menu-list">
                    <m.ul variants={variantsUl}>
                        {listOfItems}
                    </m.ul>
                </div>
                <div className="Nav-menu-aside">
                    <m.ul variants={variantsUl}>
                        {listOfAsideItems}
                    </m.ul>
                </div>
            </m.div>
        </nav>
    )
}
export default Nav;