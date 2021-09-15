import React from "react";
// import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import AppSidebar from "./components/AppSidebar";
import AppHeader from "./components/AppHeader";
import { Provider } from "react-redux";
import store from "./store";
const DefaultLayout = () => {
  return (
    <Provider store={store}>
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          {/* <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter /> */}
        </div>
      </div>
    </Provider>
  );
};

export default DefaultLayout;