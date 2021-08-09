import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes[action.payload.id] = {
        name: action.payload.name,
        topicId: action.payload.topicId,
        cardIds: []
      };
    }
  }
});

export const selectQuizzes = (state) => state.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
