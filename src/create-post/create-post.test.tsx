import { render, fireEvent } from '@testing-library/react-native';
import CreatePost from './create-post';
import { useController, useForm } from 'react-hook-form';

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: jest.fn(),
  useController: jest.fn(),
}));

describe('CreatePost', () => {
  it('calls onSubmit when the submit button is pressed', () => {
    const handleSubmit = jest.fn((fn) => fn);
    const control = {};

    (useController as jest.Mock).mockReturnValue({
      field: {
        onChange: jest.fn(),
        value: '',
      }
    });
    (useForm as jest.Mock).mockReturnValue({ handleSubmit, control });

    const { getByText } = render(<CreatePost />);
    const submitButton = getByText('Submit');

    fireEvent.press(submitButton);

    expect(handleSubmit).toHaveBeenCalled();
  });
});