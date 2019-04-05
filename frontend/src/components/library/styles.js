
// day / night / hover color theme controls
export const STATUS = {
  day: "black",
  night: "#21ce99",
  hover: "lightGray"
};

// base styles for all components
export const BASE = {
  position: "relative",
  color: "black",
  textAlign: "center",
  day: {
    ':hover': {
      color: STATUS.night,
    },
    color: STATUS.day,
  },
  night: {
    ':hover': {
      color: STATUS.day,
    },
    color: STATUS.night
  },
  sm: {
    fontSize: "smaller"
  },
  md: {
    fontSize: "medium"
  },
  lg: {
    fontSize: "larger"
  },
  textWeight:{
    bold: {
      fontWeight: "bold",
    },
    normal: {
      fontWeight: "normal",
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
}
