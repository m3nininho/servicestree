import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme.js";

import List from "./Pages/List/List.jsx";
import { ModalProvider } from "styled-react-modal";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <GlobalStyles />
        <List />
      </ModalProvider>
    </ThemeProvider>
  </React.StrictMode>
);
