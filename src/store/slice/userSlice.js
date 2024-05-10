import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userAPIUrl = process.env.REACT_APP_USER_API_URL;

export const addUser = createAsyncThunk("user/AddUser", async (userData) => {
  userData["status"] = 1;
  try {
    const response = await axios.post(
      `http://localhost:3000/v1/api/user/signup`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (userData) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/v1/api/user/update-user/`,
        userData.data,
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchUserById = createAsyncThunk("/get-user/", async (userId) => {
  try {
    const response = await axios.get(`${userAPIUrl}/user/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUserById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const userAPIUrl = process.env.REACT_APP_USER_API_URL;

// export const addUser = createAsyncThunk("user/AddUser", async (userData) => {
//   userData["status"] = 1;
//   try {
//     console.log("Url = ", userAPIUrl);
//     const response = await axios.post(
//       `http://localhost:3000/v1/api/user/signup`,
//       userData,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// });

// export const updateUser = createAsyncThunk(
//   "user/updateUser",
//   async (userData) => {
//     try {
//       const response = await axios.put(
//         `${userAPIUrl}/update-user/${userData.id}`,
//         userData.data,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//           },
//         }
//       );
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   }
// );

// export const fetchUserById = createAsyncThunk("/get-user/", async (userId) => {
//   try {
//     const response = await axios.get(`${userAPIUrl}/user/${userId}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// });

// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     data: null,
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(addUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(addUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.data = action.payload;
//         state.error = null;
//       })
//       .addCase(addUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       })
//       .addCase(updateUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(updateUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.data = action.payload;
//         state.error = null;
//       })
//       .addCase(updateUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       })
//       .addCase(fetchUserById.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchUserById.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.data = action.payload;
//         state.error = null;
//       })
//       .addCase(fetchUserById.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default userSlice.reducer;
