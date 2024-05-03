import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getColumnData = createAsyncThunk(
  "auth/getColumnData",
  async (token) => {
    try {
      const response = await axios.get(`${apiUrl}/user_column`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const createColumnData = createAsyncThunk(
  "auth/createColumnData",
  async ({ token, data }, { dispatch }) => {
    try {
      const res = await axios.post(
        `${apiUrl}/user_column`,
        { column_name: data },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(getColumnData(token));
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteColumnData = createAsyncThunk(
  "auth/deleteColumnData",
  async ({ token, columnId }, { dispatch }) => {
    try {
      await axios.delete(`${apiUrl}/user_column/${columnId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getColumnData(token));
    } catch (error) {
      throw error;
    }
  }
);

const columnSlice = createSlice({
  name: "new_column",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    updateColumnData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getColumnData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getColumnData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getColumnData.rejected, (state, action) => {
        state.isLoading = false;
        // Handle error
      })
      .addCase(createColumnData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createColumnData.fulfilled, (state, action) => {
        state.data = [...state.data, action.payload];
        state.isLoading = false;
      })
      .addCase(createColumnData.rejected, (state, action) => {
        state.isLoading = false;
        // Handle error
      })
      .addCase(deleteColumnData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteColumnData.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (column) => column.id !== action.payload.deletedColumnId
        );
        state.isLoading = false;
      })
      .addCase(deleteColumnData.rejected, (state, action) => {
        state.isLoading = false;
        // Handle error
      });
  },
});

export const { updateColumnData } = columnSlice.actions;

export default columnSlice.reducer;
