import React, { FC, ReactNode } from "react";
import Form from "components/Form";
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core";
import theme from "utils/theme";
import { ThemeProvider } from "styled-components";

const Regular: FC = () => <Form />;

const Wrapper: FC = ({ children }) => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);

export { Regular };

export default {
  title: "Common/TestApp",
  decorators: [(storyFn: () => ReactNode) => <Wrapper>{storyFn()}</Wrapper>],
};
