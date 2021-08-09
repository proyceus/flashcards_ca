import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const createNewQuiz = (payload) => {
  return (dispatch) => {
    dispatch(
      addQuiz({
        id: payload.id,
        name: payload.name,
        cardIds: payload.cardIds,
        topicId: payload.topicId
      })
    );
    dispatch(addQuizId({ topicId: payload.topicId, quizId: payload.id }));
  };
};

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes[action.payload.id] = {
        id: action.payload.id,
        topicId: action.payload.topicId,
        name: action.payload.name,
        cardIds: []
      };
    }
  }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
