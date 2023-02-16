const appMainTransition = {
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
};

export default appMainTransition;