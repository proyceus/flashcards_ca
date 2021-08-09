import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      state.topics[action.payload.id] = {
        name: action.payload.name,
        icon: action.payload.icon,
        quizIds: []
      };
    }
  }
});

export const selectTopics = (state) => state.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
