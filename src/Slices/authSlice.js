import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,
  loading: false,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // setSignupData(state, value) {
    //   state.signupData = value.payload;
    // },
    // setLoading(state, value) {
    //   state.loading = value.payload;
    // },
    // setToken(state, value) {
    //   state.token = value.payload;
    // },
    setSignupData(state, action) { // Changed 'value' to 'action'
      state.signupData = action.payload; // Directly set to action.payload
    },
    setLoading(state, action) { // Changed 'value' to 'action'
      state.loading = action.payload;
    },
    setToken(state, action) { // Changed 'value' to 'action'
      state.token = action.payload;
    },
  },
});

export const { setSignupData, setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;