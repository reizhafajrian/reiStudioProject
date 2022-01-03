import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
        console.log(action.payload,'action')
      state.user = action.payload;
    //   console.log(state.user);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = dataSlice.actions;

export default dataSlice.reducer;
