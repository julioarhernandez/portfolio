import React, {createContext, useEffect, useState} from "react";
import { useOutlet, useLocation } from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import {MenuContext} from "./contexts/contexts";

import Nav from "./components/Nav/Nav";

import './App.scss';

const variantsMenu = {
    open: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            duration: 1,
            delay: 1
        }
    },
    closed: {
        opacity: 0,
        transition: {
            when: "afterChildren",
            duration: 0.3,
        }
    },
}

function App() {
    const currentOutlet = useOutlet();
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();
    useEffect(()=> {
        console.log('menu context updarte open menu', menuOpen);
    }, [menuOpen]);
  return (
      <MenuContext.Provider value={[menuOpen, setMenuOpen]}>
            <div className="App">
              <header className="App-header">
                  <Nav activePath={pathname}/>
              </header>
                <motion.div className="App-main"
                    animate={menuOpen ? "closed" : "open"}
                    key="openIcon"
                    variants={variantsMenu}>
                          {currentOutlet && React.cloneElement(currentOutlet, { key: pathname })}
                </motion.div>
            </div>
      </MenuContext.Provider>
  );
}

export default App;
