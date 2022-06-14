import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'http://localhost:4000/api/doshas';

export const fetchDoshas = createAsyncThunk('doshas/fetchDoshas', async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});

const initialState = {
  doshas: [],
  loading: false,
};

const doshasSlice = createSlice({
  name: 'doshas',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDoshas.pending]: (state) => {
      state.loading = true;
    },
    [fetchDoshas.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.doshas = payload;
    },
    [fetchDoshas.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const doshasReducer = doshasSlice.reducer;
