export const variantsMenu = {
    open: {
        opacity: 1,
        zIndex: 2,
        transition: {
            when: "beforeChildren",
            duration: 0.3,
        }
    },
    closed: {
        opacity: 0,
        zIndex: 0,
        transition: {
            when: "afterChildren",
            duration: 3
        }
    },
};
export const variantsMenuIcon = {
    open: {opacity: 1, scale: 1},
    openLeaving: {opacity: 0, scale: 1.5, rotate: 10},
    closed: {opacity: 0, rotate: 0, scale: 0},
    closedLeaving: {opacity: 1, rotate: 90, scale: 1},
};
export const variantsUl = {
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
export const variantsLi = {
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