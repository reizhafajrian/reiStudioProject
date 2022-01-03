import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./reduxData";

export default configureStore({
  reducer: {
    data: dataSlice,
  },
});
