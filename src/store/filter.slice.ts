import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterType } from "../logic/filterRepos";


type InitialState = {
  type: FilterType;
  sort: string;
  topics: string[];
}

const initialState: InitialState = {
  type: 'all',
  sort: '',
  topics: [],
}

// create redux toolkit slice for filter
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTypeFilter(state, action: PayloadAction<FilterType>) {
        state.type = action.payload;
        }
  },
});

export const { setTypeFilter } = filterSlice.actions;

export const filterReducer  =  filterSlice.reducer;
