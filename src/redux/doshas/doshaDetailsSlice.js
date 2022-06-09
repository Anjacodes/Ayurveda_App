import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = 'http://localhost:4000/api/doshas';

export const fetchDetails = createAsyncThunk('doshas/fetchDetails', async (doshaId) => {
    const response = await fetch(`${URL}/${doshaId}`)
    const data = await response.json();
    return data
});

const initialState = {
    doshaDetails: [],
    loading: false
};

const detailsSlice = createSlice({
    name: "doshas",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchDetails.pending]: (state) => {
            state.loading = true
        },
        [fetchDetails.fulfilled]: (state, { payload }) => {
            state.doshaDetails = payload;
            state.loading = false;
        },
        [fetchDetails.rejected]: (state) => {
            state.loading = false;
        },
    },
});

export const doshaDetailsReducer = detailsSlice.reducer;
