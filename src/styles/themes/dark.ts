import normal from "./normal";

const dark: typeof normal = {
  ...normal,
  colors: {
    ...normal.colors,
    darkGrey: "#d4d6e0",
    background: "#272727",
  },
};

export default dark;
