export const rowVariants = {
  hidden: {
    x: window.outerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 10,
  },
};

export const BoxVariants = {
  normal: {
    scale: 1,
    transition: {
      type: 'tween',
    },
  },
  hover: {
    scale: 1.3,

    y: -80,
    transition: {
      type: 'tween',
      duration: 0.1,
      delay: 0.3,
    },
  },
};

export const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.1,
      delay: 0.3,
    },
  },
};
