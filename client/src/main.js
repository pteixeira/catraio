import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next/lib";
import i18n from "./i18n";

import router from "app-root/router";
import store from "app-root/store";
import { initStoreFromServer } from "app-root/util/store";

initStoreFromServer(store);

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      {router}
    </I18nextProvider>
  </Provider>
  , document.getElementById("app")
);
