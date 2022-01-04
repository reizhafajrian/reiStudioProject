import React, { useEffect } from "react";
// import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import AppSidebar from "../components/AppSidebar";
import AppHeader from "../components/AppHeader";
import AppContent from "../components/AppContent";
import AppFooter from "../components/AppFooter";
import { Provider } from "react-redux";
import store from "../store";
import Cookies from "universal-cookie";
const index = () => {
  const checkLogin = () => {
    const cookies = new Cookies();
    const user = cookies.get("user-admin");
    if (user === "undefined") {
      window.location.href = "/admin/login";
    }
  };
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <div>
      <Provider store={store}>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3">
            <AppContent />
          </div>
          <AppFooter />
        </div>
      </Provider>
    </div>
  );
};

export default index;
