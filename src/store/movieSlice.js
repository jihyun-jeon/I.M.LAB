import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

// 2. reducers를 만들어 add() 호출시,1. state가 어떻게 바껴서 store객체에 어떻게 값 담을지, 2. action을 만드는 역활인 함수를 만들어줌.
export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state[payload.id] = payload;
    },
  },
});

export const { add } = movieSlice.actions; // reducers에 함수를 만들어주면, 여기에 action이 자동으로 생김

export default movieSlice.reducer;
