import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Action } from '@reduxjs/toolkit';

export type AuthState = {
  token: string|null;
  username: string|null;
}

const initialState = { token: null, username: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuth(state: AuthState, action: PayloadAction<AuthState>) {
      state.token = action.payload.token;
      state.username = action.payload.username;
    }
  }
})

export const {updateAuth} = authSlice.actions;
export default authSlice.reducer;