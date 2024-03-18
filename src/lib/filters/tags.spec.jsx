import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Tags from './tags';

describe('Tags Component', () => {
  const options = [
    { label: 'Tag 1', value: 'tag1' },
    { label: 'Tag 2', value: 'tag2' },
    { label: 'Tag 3', value: 'tag3' },
  ];

  const defaultProps = {
    options,
    onFilter: jest.fn(),
    onReset: jest.fn(),
    colAccessor: 'test',
  };

  it('applies tags filters', async () => {
    const { baseElement, getByText, getByTestId, getAllByRole } = render(
      <Tags {...defaultProps} />
    );
    expect(baseElement).toBeTruthy();

    await waitFor(() => getByTestId('open-test-tags-filter'));
    expect(getByTestId('open-test-tags-filter')).toBeTruthy();
    fireEvent.click(getByTestId('open-test-tags-filter'));

    await waitFor(() => expect(getByTestId('test-tags-filter')).toBeTruthy());

    expect(getByText('Tag 2')).toBeTruthy();

    const checkboxes = getAllByRole('checkbox');
    checkboxes.forEach((checkbox) => {
      fireEvent.click(checkbox);
    });

    expect(getByTestId('reset-test-tags-filter')).toBeTruthy();
    expect(getByTestId('apply-test-tags-filter')).toBeTruthy();
    fireEvent.click(getByTestId('apply-test-tags-filter'));
  });

  it('resets tags filters', async () => {
    const { baseElement, getByText, getByTestId, getAllByRole } = render(
      <Tags {...defaultProps} />
    );
    expect(baseElement).toBeTruthy();

    await waitFor(() => getByTestId('open-test-tags-filter'));
    expect(getByTestId('open-test-tags-filter')).toBeTruthy();
    fireEvent.click(getByTestId('open-test-tags-filter'));

    await waitFor(() => expect(getByTestId('test-tags-filter')).toBeTruthy());

    expect(getByText('Tag 2')).toBeTruthy();

    const checkboxes = getAllByRole('checkbox');
    checkboxes.forEach((checkbox) => {
      fireEvent.click(checkbox);
    });

    expect(getByTestId('apply-test-tags-filter')).toBeTruthy();
    expect(getByTestId('reset-test-tags-filter')).toBeTruthy();
    fireEvent.click(getByTestId('reset-test-tags-filter'));
  });
});
