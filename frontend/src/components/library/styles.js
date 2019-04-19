// day / night / hover color theme controls
export const COLORS = {
  green: "#21ce99",
  lightGreen: "rgba(33, 206, 153, 0.57)",
  xLightGreen: "#a1e9d27a"
};

export const STATUS = {
  day: "black",
  night: COLORS.green,
  hover: "lightGray"
};

// base styles for all components
export const BASE = {
  position: "relative",
  color: "black",
  textAlign: "center",
  letterSpacing: "0.05em",
  day: {
    ":hover": {
      color: STATUS.night
    },
    color: STATUS.day
  },
  night: {
    ":hover": {
      color: STATUS.day
    },
    color: STATUS.night
  },
  textSize: {
    sm: {
      fontSize: "medium"
    },
    md: {
      fontSize: "large"
    },
    lg: {
      fontSize: "x-large"
    }
  },
  textWeight: {
    bold: {
      fontWeight: "600"
    },
    normal: {
      fontWeight: "normal"
    },
    thin: {
      fontWeight: "thin"
    }
  },
  hidden: {
    true: {
      visibility: "hidden",
      display: "none"
    },
    false: {
      visibility: "visible",
      display: "inline"
    }
  }
};
