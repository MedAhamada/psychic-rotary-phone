import { fireEvent, render, waitFor } from '@testing-library/react';
import Alert from './alert';

describe('Alert', () => {
  it('should render with success type and icon', async () => {
    const onCloseMock = jest.fn();
    const { baseElement, getByTestId, getByLabelText, getByText } = render(
      <Alert
        type="success"
        title={'Success Alert'}
        details={'This is a success message'}
        show={true}
        onClose={onCloseMock}
        position={'fixed'}
      />
    );

    expect(baseElement).toBeTruthy();

    await waitFor(() => getByTestId('checkmark-icon'));
    expect(getByText('This is a success message')).toBeTruthy();
    expect(getByText('Success Alert')).toBeTruthy();
    expect(getByLabelText('alert close button')).toBeTruthy();
    fireEvent.click(getByLabelText('alert close button'));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should render with warning type and icon', async () => {
    const onCloseMock = jest.fn();
    const { baseElement, getByTestId, getByLabelText, getByText } = render(
      <Alert
        type="warning"
        title={'Warning Alert'}
        details={'This is a warning message'}
        show={true}
        onClose={onCloseMock}
        position={'fixed'}
      />
    );

    expect(baseElement).toBeTruthy();

    await waitFor(() => getByTestId('info-icon'));
    expect(getByText('This is a warning message')).toBeTruthy();
    expect(getByText('Warning Alert')).toBeTruthy();
    expect(getByLabelText('alert close button')).toBeTruthy();
    fireEvent.click(getByLabelText('alert close button'));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should render with danger type and icon', async () => {
    const onCloseMock = jest.fn();
    const { baseElement, getByTestId, getByLabelText, getByText } = render(
      <Alert
        type="danger"
        title={'Danger Alert'}
        details={'This is a danger message'}
        show={true}
        onClose={onCloseMock}
        position={'fixed'}
      />
    );

    expect(baseElement).toBeTruthy();

    await waitFor(() => getByTestId('warning-icon'));
    expect(getByText('This is a danger message')).toBeTruthy();
    expect(getByText('Danger Alert')).toBeTruthy();
    expect(getByLabelText('alert close button')).toBeTruthy();
    fireEvent.click(getByLabelText('alert close button'));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
