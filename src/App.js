import React, {useEffect, useState} from "react";
import { useOutlet, useLocation } from "react-router-dom";
import {motion as m} from "framer-motion";
import {MenuContext} from "./contexts/contexts";

import Nav from "./components/Nav/Nav";

import './App.scss';

const variantsMenu = {
    open: {
        display: 'block',
        opacity: 1,
        transition: {
            when: "beforeChildren",
            duration: 1,
            delay: 0.5
        }
    },
    closed: {
        opacity: 0,
        transition: {
            when: "afterChildren",
            duration: 0.3,
        },
        transitionEnd: { display: "none" }
    },
}

function App() {
    const currentOutlet = useOutlet();
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();
  return (
      <MenuContext.Provider value={[menuOpen, setMenuOpen]}>
            <div className="App">
              <header className="App-header">
                  <Nav activePath={pathname}/>
              </header>
                <m.div className="App-main"
                    animate={menuOpen ? "closed" : "open"}
                    key="openIcon"
                    variants={variantsMenu}>
                          {currentOutlet && React.cloneElement(currentOutlet, { key: pathname })}
                </m.div>
            </div>
      </MenuContext.Provider>
  );
}

export default App;
