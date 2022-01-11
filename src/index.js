import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import GlobalState from "./context/GlobalState";

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
  font-family: "Lato", sans-serif;
  font-size: 1em;
  line-height: 1.3;
  background-color: #f6f7f9;
  color: #404e5f;
  margin: 0;
  padding: 0; 
}

a {
  text-decoration: none; 
}

input,
textarea {
  font-family: "Lato", sans-serif;
  background-color: transparent; 
}
`;

const theme = {
  colors: {
    sideNavBar: "#001e2d",
    sideNavBarHover: "#001b29",
    fontColor: "#31475f",
    primaryColor: "#c4ca18",
    lightBackground: "#f6f7f9",
    lightLinkColor: "rgba(255, 255, 255, 0.6)",
  },
  media: {
    laptop: "(min-width: 768px)",
    phone: "(max-width: 768px)",
  },
};

ReactDOM.render(
  <GlobalState>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </GlobalState>,
  document.getElementById("root")
);
