import { render, fireEvent, screen } from '@testing-library/react-native';
import CreatePost from './create-post';
import { flushPromises } from 'testing/test_utils';
import { Provider } from 'react-redux';
import { store } from 'redux_store/store';

const mockOnSubmit = jest.fn();

jest.mock('react-hook-form', () => {
  const module = jest.requireActual('react-hook-form');
  return {
    ...module,
    useForm: () => {
      const form = module.useForm();
      return {...form, handleSubmit: () => form.handleSubmit(mockOnSubmit)};
    },
  }
});


describe('Submit button', () => {
  afterEach(() => {
    mockOnSubmit.mockClear();
  });

  it('calls onSubmit for submit button press when title and body have content', async () => {
    render(<Provider store={store}><CreatePost /></Provider>);
    
    const titleTextInput = await screen.findByLabelText('Title');
    fireEvent.changeText(titleTextInput, 'some text');
    const bodyTextInput = await screen.findByLabelText('Body');
    fireEvent.changeText(bodyTextInput, 'some text');

    const submitButton = await screen.findByText('Submit');
    fireEvent.press(submitButton);

    await flushPromises();
    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it('does not call onSubmit for submit button press when body is untouched', async () => {
    render(<Provider store={store}><CreatePost /></Provider>);
    
    const titleTextInput = await screen.findByLabelText('Title');
    fireEvent.changeText(titleTextInput, 'some text');

    const submitButton = await screen.findByText('Submit');
    fireEvent.press(submitButton);

    await flushPromises();
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it('does not call onSubmit for submit button press when title is untouched', async () => {
    render(<Provider store={store}><CreatePost /></Provider>);
    
    const bodyTextInput = await screen.findByLabelText('Body');
    fireEvent.changeText(bodyTextInput, 'some text');

    const submitButton = await screen.findByText('Submit');
    fireEvent.press(submitButton);

    await flushPromises();
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it('does not call onSubmit for submit button press when body is empty', async () => {
    render(<Provider store={store}><CreatePost /></Provider>);
    
    const titleTextInput = await screen.findByLabelText('Title');
    fireEvent.changeText(titleTextInput, 'some text');
    const bodyTextInput = await screen.findByLabelText('Body');
    fireEvent.changeText(bodyTextInput, '');

    const submitButton = await screen.findByText('Submit');
    fireEvent.press(submitButton);

    await flushPromises();
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it('does not call onSubmit for submit button press when title is untouched', async () => {
    render(<Provider store={store}><CreatePost /></Provider>);
    
    const titleTextInput = await screen.findByLabelText('Title');
    fireEvent.changeText(titleTextInput, '');
    const bodyTextInput = await screen.findByLabelText('Body');
    fireEvent.changeText(bodyTextInput, 'some text');

    const submitButton = await screen.findByText('Submit');
    fireEvent.press(submitButton);

    await flushPromises();
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });
});