import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const authAPIUrl = process.env.REACT_APP_AUTH_API_URL;

export const updatePassword = createAsyncThunk(
  "auth/update-user",
  async ({ email, oldPassword, newPassword }) => {
    try {
      const response = await axios.put(`${authAPIUrl}/update-user`, {
        email,
        oldPassword,
        newPassword,
      });
      return response.data;
    } catch (error) {
      // Handle potential 403 error and other errors
      if (error.response && error.response.status === 403) {
        throw new Error(
          "Unauthorized: Invalid credentials or permission denied"
        );
      } else {
        throw error;
      }
    }
  }
);

const updatePasswordSlice = createSlice({
  name: "update-user",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updatePassword.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      });
  },
});

export default updatePasswordSlice.reducer;
