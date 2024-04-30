import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  apiUrl,
  getColumnData,
  createColumnData,
  deleteColumnData,
} from "./newColumnSlice";

export const updateColumnData = createAsyncThunk(
  "auth/updateColumnData",
  async ({ token, newData }, { dispatch }) => {
    try {
      // Assuming you have an API endpoint to update column data
      const res = await axios.put(
        `${apiUrl}/user_column/${newData.id}`,
        { column_name: newData.column_name },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
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
    } finally {
    }
  }
);
