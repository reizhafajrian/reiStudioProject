import React from "react";
// import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import AppSidebar from "../components/AppSidebar";
import AppContent from "../components/AppContent";
import AppHeader from "../components/AppHeader";
import { Provider } from "react-redux";
import store from "../store";
import { useRouter } from "next/router";

const index = () => {
  const dat=useRouter()
  console.log(dat.asPath)
  return (
    <div>
      <Provider store={store}>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3">
            <AppContent />
          </div>
          {/* <AppFooter /> */}
        </div>
      </Provider>
    </div>
  );
};

export default index;
