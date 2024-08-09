import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const authAPIUrl = process.env.REACT_APP_AUTH_API_URL; 

// Async action to fetch user data after login
export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (_, { getState }) => {
    try {
      const token = getState().auth.token;
      const response = await axios.get(`${authAPIUrl}/auth/get-user/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const LoginUser = createAsyncThunk("auth/LoginUser", async (data) => {
  try {
    const response = await axios.put(`${authAPIUrl}/auth/user/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  //   const auth_token = response.data.auth_token;
  //   // return response.data;
  //   return auth_token;
  // } catch (error) {
  //   throw error;
  // }

  const { auth_token, status, message } = response.data;

    return { auth_token, status, message };
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      throw { message: data.message || `Server error: ${status}`, status };
    } else {
      throw { message: "Network error or request failed.", status: 500 };
    }
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    user: null, // Add user object to store user data
    isLoading: false,
    error: null, // Add error state
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state, action) => {
        state.isLoading = true;
        state.error = null; // Clear previous error
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.token = action.payload.auth_token;
        state.isLoading = false;
        state.error = null; // Clear previous error
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message; // Set error message from action
      })
      .addCase(fetchUserData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
