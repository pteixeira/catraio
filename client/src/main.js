import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next/lib";
import i18n from "./i18n";

import router from "./router";
import store from "./store";

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    {router}
  </I18nextProvider>
  , document.getElementById("app")
);
