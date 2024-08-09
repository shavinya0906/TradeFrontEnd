import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const tradingAccountList = createAsyncThunk(
  "tradingAccount/tradingAccountList",
  async (token) => {
    const response = await axios.get(`${apiUrl}/trading-account`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    return response;
  }
);

export const tradingAccountAdd = createAsyncThunk(
  "tradingAccount/tradingAccountAdd",
  async (data) => {
    const response = await axios.post(
      `${apiUrl}/trading-account`,
      data?.values,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${data?.token}`,
        },
      }
    );
    return response;
  }
);

export const tradingAccountEdit = createAsyncThunk(
  "tradingAccount/tradingAccountEdit",
  async (data) => {
    console.log("h", data);
    const tid = data?.id;
    const tval = data?.values;
    const response = await axios.put(
      `${apiUrl}/trading-account/update/${tid}`,
      tval,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${data?.token}`,
        },
      }
    );
    return response;
  }
);

export const tradingAccountUpdateFilter = createAsyncThunk(
  "tradingAccount/tradingAccountFilter",
  async (data) => {
    const response = await axios.get(
      `${apiUrl}/trading-account/${data.values}`, 
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data?.token}`,
        },
      }
    );
    return response;
  }
);

export const tradingAccountDelete = createAsyncThunk(
  "tradingAccount/tradingAccountDelete",
  async (data) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/trading-account/${data.accountId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.token}`,
          },
        } 
      );
      if(response.status === 200){alert("Account Deleted");}
      return response;
    } catch (error) {
      // Handle error if needed
      console.error("Error deleting trading account:", error);
      throw error;
    }
  }
);

const tradingAccountSlice = createSlice({
  name: "tradingAccount",
  initialState: {
    data: [],
    payloadHold: [],
    isAddedOrEdited: false,
    isLoading: false,
  },
  reducers: {
    addNewData: (state, action) => {
      state.payloadHold = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(tradingAccountList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(tradingAccountList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action?.payload?.data;
      })
      .addCase(tradingAccountList.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(tradingAccountAdd.pending, (state, action) => {
        state.isLoading = true;
        state.isAddedOrEdited = false;
      })
      .addCase(tradingAccountAdd.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAddedOrEdited = true;
        state.data = [...state.data, action?.payload?.data];
      })
      .addCase(tradingAccountAdd.rejected, (state, action) => {
        state.isLoading = false;
        state.isAddedOrEdited = false;
      })
      .addCase(tradingAccountEdit.pending, (state, action) => {
        state.isLoading = true;
        state.isAddedOrEdited = false;
      })
      .addCase(tradingAccountEdit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAddedOrEdited = true;
        // state.data = action?.payload?.data;
      })
      .addCase(tradingAccountEdit.rejected, (state, action) => {
        state.isLoading = false;
        state.isAddedOrEdited = false;
      })
      .addCase(tradingAccountDelete.pending, (state, action) => {
        state.isLoading = true;
        state.isAddedOrEdited = false;
      })
      .addCase(tradingAccountDelete.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAddedOrEdited = true;
        // Filter out the deleted trading account from the state
        state.data = state.data.filter(
          (account) => account.id !== action.payload.data.id
        );

      })
      .addCase(tradingAccountDelete.rejected, (state, action) => {
        state.isLoading = false;
        state.isAddedOrEdited = false;
      });
  },
});

export default tradingAccountSlice.reducer;
