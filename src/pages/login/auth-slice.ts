import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthState = {
  token: string|null;
  username: string|null;
  tokenTimestamp: Date|null;
}

const initialState = { token: null, username: null, tokenTimestamp: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuth(state: AuthState, action: PayloadAction<AuthState>) {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.tokenTimestamp = action.payload.tokenTimestamp;
    }
  }
})

export const {updateAuth} = authSlice.actions;
export default authSlice.reducer;