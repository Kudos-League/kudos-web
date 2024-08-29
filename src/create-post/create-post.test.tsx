import { render, fireEvent, screen } from '@testing-library/react-native';
import CreatePost from './create-post';

describe('CreatePost', () => {
  function setup(): { mockHandleSubmit: jest.Mock } {
    const mockHandleSubmit = jest.fn(fn => fn);
    jest.mock('react-hook-form', () => {
      const module = jest.requireActual('react-hook-form');
      return {
        ...module,
        useForm: () => ({...module.useForm(), handleSubmit: mockHandleSubmit})
      }
    });

    return {mockHandleSubmit};
  }

  // TODO: MAKE SURE TO INPUT ONE FIELD AND NOT THE OTHER
  it('does calls onSubmit when title and body have content', async () => {
    const { mockHandleSubmit } = setup();
    render(<CreatePost />);

    const titleTextInput = await screen.findByLabelText('Title');
    fireEvent(titleTextInput, 'some text');

    const bodyTextInput = await screen.findByLabelText('Body');
    fireEvent(bodyTextInput, 'some text');
    
    const submitButton = await screen.findByText('Submit');

    fireEvent.press(submitButton);

    expect(mockHandleSubmit).toHaveBeenCalled();
  });

  // TODO: pit() FOR WHEN ONE FIELD IS EMPTY
});