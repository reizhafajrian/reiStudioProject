import React from "react";
// import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
<<<<<<< HEAD:pages/admin/app/[index].js
import AppSidebar from "../components/AppSidebar";
import AppHeader from "../components/AppHeader";
import AppContent from "../components/AppContent";
import AppFooter from "../components/AppFooter";
import { Provider } from "react-redux";
import store from "../store";
const DefaultLayout = () => {
=======
import AppSidebar from "./components/AppSidebar";
import AppContent from "./components/AppContent";
// import AppHeader from "./components/AppHeader";
import { Provider } from "react-redux";
import store from "./store";

const index = () => {
>>>>>>> main:pages/admin/index.js
  return (
    <div>
      <Provider store={store}>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
<<<<<<< HEAD:pages/admin/app/[index].js
          <AppHeader />
          <div className="body flex-grow-1 px-3">
            <AppContent />
          </div>
          <AppFooter />
=======
          {/* <AppHeader /> */}
          <div className="body flex-grow-1 px-3">
            <AppContent />
          </div>
          {/* <AppFooter /> */}
>>>>>>> main:pages/admin/index.js
        </div>
      </Provider>
    </div>
  );
};

export default index;