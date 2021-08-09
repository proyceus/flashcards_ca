import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

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
        cardIds: action.payload.cardIds
      };
    }
  }
});

export const createNewQuiz = (payload) => {
  const { id, name, topicId, cardIds } = payload;
  return (dispatch) => {
    dispatch(
      addQuiz({
        id,
        name,
        topicId,
        cardIds
      })
    );
    dispatch(addQuizId({ topicId: topicId, quizId: id }));
  };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
