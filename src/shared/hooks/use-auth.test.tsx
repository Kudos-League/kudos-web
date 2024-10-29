import { render, screen } from '@testing-library/react-native';
import { store } from 'redux_store/store';
import useAuth from 'shared/hooks/use-auth';
import { useAppSelector } from 'redux_store/hooks';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import { resetAuthState } from 'redux_store/slices/auth-slice';
import { ASYNC_STORAGE_KEY__AUTH_DATA } from 'shared/constants';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
}));

function TestComponent() {
  useAuth();
  const authState = useAppSelector(state => state.auth);
  return (<View>
    <Text>{authState.token ? authState.token : 'No token'}</Text>
    <Text>{authState.username ? authState.username : 'No username'}</Text>
    <Text>{authState.tokenTimestamp ? authState.tokenTimestamp : 'No tokenTimestamp'}</Text>
  </View>);
};

const TOKEN = 'Some token';
const USERNAME = 'someUsername12345';
const TOKEN_TIMESTAMP = 1729500000000;

function mockPersistentAuthState(authState: string|null) {
  (AsyncStorage.getItem as jest.Mock).mockResolvedValue(authState);
}

describe('useAuth hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    store.dispatch(resetAuthState());
  });

  it('surfaces persistent authState when available', async () => {
    mockPersistentAuthState(JSON.stringify({
      token: TOKEN,
      username: USERNAME,
      tokenTimestamp: TOKEN_TIMESTAMP,
    }));

    render(<Provider store={store}><TestComponent /></Provider>);
    
    await screen.findByText(TOKEN);
    screen.queryByText(USERNAME);
    screen.queryByText(String(TOKEN_TIMESTAMP));

    expect(screen.queryByText('No token')).toBeFalsy();
    expect(screen.queryByText('No username')).toBeFalsy();
    expect(screen.queryByText('No tokenTimestamp')).toBeFalsy();
  });

  it('gracefully handles when there is no persistent authState', async () => {
    mockPersistentAuthState(null);

    render(<Provider store={store}><TestComponent /></Provider>);

    await screen.findByText('No token');
    screen.queryByText('No username');
    screen.queryByText('No tokenTimestamp');

    expect(screen.queryByText(TOKEN)).toBeFalsy();
    expect(screen.queryByText(USERNAME)).toBeFalsy();
    expect(screen.queryByText(String(TOKEN_TIMESTAMP))).toBeFalsy();
  });

  it('searches storage for shared key constant', async () => {
    render(<Provider store={store}><TestComponent /></Provider>);

    expect(AsyncStorage.getItem as jest.Mock).toHaveBeenCalledWith(ASYNC_STORAGE_KEY__AUTH_DATA);
  });
});
