import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { useAppDispatch } from 'redux/hooks';
import { AuthState, updateAuth } from 'redux/slices/auth-slice';
import { ASYNC_STORAGE_KEY__AUTH_DATA } from 'shared/constants';

export default function useAuth() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    let saveAuthState = true;
    
    (async () => {
      const authStateJson = await AsyncStorage.getItem(ASYNC_STORAGE_KEY__AUTH_DATA);
      if (authStateJson === null) {
        return;
      }
      const authStateRaw = JSON.parse(authStateJson);
      const authState: AuthState = {
        token: String(authStateRaw.token),
        username: String(authStateRaw.username),
        tokenTimestamp: Number(authStateRaw.tokenTimestamp),
      }
      if (saveAuthState) {
        dispatch(updateAuth(authState));
      }
    })();
    return () => {saveAuthState = false};
  }, []);
}
