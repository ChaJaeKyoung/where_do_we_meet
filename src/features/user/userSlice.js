import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedinUser: null //초기값 null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogIn: (state, { payload: // pw 정보를 제외한 나머지만 구조분해 할당으로
      { firstName,
        lastName,
        id,
        nickname,
        userProfileImg,
        friends,
        authority,
        favorites,
        point
      }
    }) => {
      state.loggedinUser = {
        firstName,
        lastName,
        id,
        nickname,
        userProfileImg,
        friends,
        authority,
        favorites,
        point
      };
    },
    userLogOut: (state) => {
      state.loggedinUser = null;
    }
  }
});

export const { userLogIn, userLogOut } = userSlice.actions;
export const selectUser = state => state.user.loggedinUser;
export default userSlice.reducer;