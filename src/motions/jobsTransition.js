export const cardVariantsLeft = {
    offscreen: {
        x: 0,
        opacity: 0.3
    },
    onscreen: {
        x: 20,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};
export const cardVariantsRight = {
    offscreen: {
        x: 0,
        opacity: 0.3
    },
    onscreen: {
        x: -20,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};
export const dateMotion = {
    offscreen: {
        opacity: 0,
    },
    onscreen: {
        opacity: 1
    }
};
export const barMotion = {
    offscreen: {
        opacity: 0,
        height: 0
    },
    onscreen: {
        opacity: 1,
        height: '100%',
        transition: {
            duration: 2,
        }

    }
};