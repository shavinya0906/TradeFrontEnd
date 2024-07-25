import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const tradeLogList = createAsyncThunk(
  "tradeLog/tradeLogList",
  async (data) => {
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf("/") + 1) || "tradelog";
    const response = await axios.get(
      `${apiUrl}/trade/?filename=${filename}` + `${data.payloadUrl}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${data.token}`,
        },
      }
    );
    return response;
  }
);

// To create q new trade log

export const tradeLogAdd = createAsyncThunk(
  "tradeLog/tradeLogAdd",
  async (data, { dispatch }) => {
    const response = await handleSaveSubmit(data.values, data.token);
    if (response.status === 200) {
      // dispatch success action, e.g.
      dispatch(tradeLogAdded({ tradeLog: response.data }));
    } else {
      // dispatch error action, e.g.
      dispatch(tradeLogAddError({ error: response.error }));
    }
  }
);

export const tradeLogEdit = createAsyncThunk(
  "tradeLog/tradeLogEdit",
  async (data) => {
    const response = await axios.put(`${apiUrl}/trade/update/`, data?.values, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${data?.token}`,
      },
    });
    return response;
  }
);

export const tradeLogUpdateFilter = createAsyncThunk(
  "tradeLog/tradeLogFilter",
  async (data) => {
    const response = await axios.get(`${apiUrl}/trade/${data.values}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data?.token}`,
      },
    });
    return response;
  }
);

export const updateTrade = createAsyncThunk(
  "tradeLog/updateTrade",
  async (data) => {
    const { questionnaireId, answers, token } = data;

    const response = await axios.put(
      `${apiUrl}/trade/update/${questionnaireId}`,
      answers,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  }
);
 
export const getTradeById = createAsyncThunk(
  "tradeLog/getTradeById",
  async ({ id, token }) => {
    try {
      const response = await axios.get(`${apiUrl}/trade/trade/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response; 
    } catch (error) {
      throw error;
    }
  }
);

const handleSaveSubmit = (values, token) => {
  const filename = "tradelog"; // or you can generate a filename based on the current date or other criteria
  axios
    .post(`${apiUrl}/trade/?filename=${filename}`, values, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response.data);
      // handle success response, e.g. show a success message or redirect to another page
    })
    .catch((error) => {
      console.error(error);
      // handle error response, e.g. show an error message
    });
};

const tradeLogSlice = createSlice({
  name: "tradeLog",
  initialState: {
    data: [],
    payloadHold: [],
    isAddedOrEdited: false,
    isLoading: false,
    start: "",
    end: "",
    selectedTrade: {},
    filterData: [
      {
        name: "Asset Class",
        data: [
          "Equity",
          "Features",
          "Options",
          "Currency",
          "Commodity",
          "Crypto",
        ],
        active: true,
        path: "asset",
        selected: [],
      },
      {
        name: "Holding Trade Type",
        data: [
          "Positional",
          "Intraday",
          "Swing",
          "Short Term",
          "Longterm",
          "Expiry",
          "BTST",
        ],
        active: false,
        path: "holding",
        // selected: ["Positional"],
        selected: [],
      },
      {
        name: "Conviction",
        data: ["Low", "Medium", "High", " Borrowed(tip)", "Gambler", "Jackpot"],
        active: false,
        path: "conviction",
        // selected: ["Low"],
        selected: [],
      },

      {
        name: "Trading account",
        data: ["Account A", "Account B"],
        active: false,
        path: "tradeAccount",
        // selected: ["Strategy 1"],
        selected: [],
      },
      {
        name: "Strategy used",
        data: ["Strategy 1", "Strategy 2"],
        active: false,
        path: "strategyUsed",
        selected: [],
        // selected: ["Account A"],
      },
    ],
  },
  reducers: {
    addNewData: (state, action) => {
      state.payloadHold = action.payload;
    },
    calenderStart: (state, action) => {
      state.start = action.payload;
    },
    calenderEnd: (state, action) => {
      state.end = action.payload;
    },
    newFilterData: (state, action) => {
      state.filterData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(tradeLogList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(tradeLogList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action?.payload?.data;
      })
      .addCase(tradeLogList.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(tradeLogAdd.pending, (state, action) => {
        state.isLoading = true;
        // state.isAddedOrEdited = false;
      })

      .addCase(tradeLogUpdateFilter.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(tradeLogUpdateFilter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action?.payload?.data;
      })
      .addCase(tradeLogUpdateFilter.rejected, (state, action) => {
        state.isLoading = false;
      })

      .addCase(tradeLogAdd.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.isAddedOrEdited = true;
        // state.data = action?.payload?.data;
      })
      .addCase(tradeLogAdd.rejected, (state, action) => {
        state.isLoading = false;
        state.isAddedOrEdited = false;
      })
      .addCase(tradeLogEdit.pending, (state, action) => {
        state.isLoading = true;
        state.isAddedOrEdited = false;
      })
      .addCase(tradeLogEdit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAddedOrEdited = true;
        // state.data = action?.payload?.data;
      })
      .addCase(tradeLogEdit.rejected, (state, action) => {
        state.isLoading = false;
        state.isAddedOrEdited = false;
      })

      .addCase(getTradeById.pending, (state, action) => {
        state.isLoading = true;
        state.isAddedOrEdited = false;
      })
      .addCase(getTradeById.fulfilled, (state, action) => {
        state.selectedTrade = action.payload?.data;
        state.selectedTrade.isLoading = false;
      })
      .addCase(getTradeById.rejected, (state, action) => {
        state.isLoading = false;
        state.isAddedOrEdited = false;
      });
  },
});
export const { calenderStart, calenderEnd, newFilterData } = tradeLogSlice.actions;
export default tradeLogSlice.reducer;
