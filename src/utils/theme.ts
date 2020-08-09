import { createMuiTheme } from "@material-ui/core";
import createSpacing from "@material-ui/core/styles/createSpacing";

const spacing = createSpacing((factor) => 4 * factor);

const theme = createMuiTheme({
  spacing,
  palette: {
    background: { default: "#FFFFFF" },
    primary: { main: "#6CA22C" },
    grey: { 100: "#999999" },
  },
  typography: {
    h6: {
      fontSize: "18px",
      lineHeight: "21px",
    },
    h5: {
      fontSize: "24px",
      lineHeight: "28px",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        padding: spacing(4),
        textTransform: undefined,
        fontWeight: "bold",
        borderRadius: "8px",
        fontSize: "14px",
        lineHeight: "16px",
      },
    },
  },
});

export default theme;
