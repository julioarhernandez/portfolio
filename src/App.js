import React, {useEffect, useState} from "react";
import {useOutlet, useLocation} from "react-router-dom";
import {motion as m} from "framer-motion";
import {MenuContext} from "./contexts/contexts";
import appMainTransition from "./motions/appMainTransition";

import Nav from "./components/Nav/Nav";

import './App.scss';
import pageTransition from "./motions/pageTransition";
import itemTransition from "./motions/itemTransition";

function App() {
    const currentOutlet = useOutlet();
    const [isLoading, setLoading] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const {pathname} = useLocation();

    useEffect(() => {
        const el = document.querySelector(".loader-container");
        if (el) {
            el.remove();
            setLoading(!isLoading);
        }
    }, []);

    return (
        <MenuContext.Provider value={[menuOpen, setMenuOpen]}>
            <m.div initial="hidden" animate="visible" variants={pageTransition} className="App">
                <m.header className="App-header" variants={itemTransition}>
                    <Nav activePath={pathname}/>
                </m.header>
                <m.div className="App-main" animate={menuOpen ? "closed" : "open"} key="openIcon" variants={appMainTransition}>
                    {currentOutlet && React.cloneElement(currentOutlet, {key: pathname})}
                </m.div>
            </m.div>
        </MenuContext.Provider>
    );
}

export default App;
