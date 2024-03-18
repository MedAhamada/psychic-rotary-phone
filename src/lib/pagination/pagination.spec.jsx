import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Pagination from './pagination';

describe('Pagination Component', () => {
  it('renders correctly', async () => {
    const { baseElement, getByText } = render(
      <Pagination
        currentPage={1}
        total={100}
        pageSize={10}
        onChange={jest.fn()}
        separatorText={'of'}
        resultText={'results'}
        entriesText={'entries per page'}
      />
    );
    expect(baseElement).toBeTruthy();
    await waitFor(() => getByText('1-10 of 100 results'));
    expect(getByText('1-10 of 100 results')).toBeTruthy();
  });

  it('handles previous button click', async () => {
    const mockOnChange = jest.fn();
    const { baseElement, getByText, getByLabelText } = render(
      <Pagination
        currentPage={2}
        total={100}
        pageSize={10}
        onChange={mockOnChange}
        separatorText={'of'}
        resultText={'results'}
        entriesText={'entries per page'}
      />
    );

    expect(baseElement).toBeTruthy();
    await waitFor(() => getByText('11-20 of 100 results'));
    expect(getByText('11-20 of 100 results')).toBeTruthy();
    await waitFor(() => getByLabelText('pagination previous'));
    expect(getByLabelText('pagination previous')).toBeTruthy();
    fireEvent.click(getByLabelText('pagination previous'));
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('handles previous button click on first page', async () => {
    const mockOnChange = jest.fn();
    const { baseElement, getByText, getByLabelText } = render(
      <Pagination
        currentPage={1}
        total={100}
        pageSize={10}
        onChange={mockOnChange}
        separatorText={'of'}
        resultText={'results'}
        entriesText={'entries per page'}
      />
    );

    expect(baseElement).toBeTruthy();
    await waitFor(() => getByLabelText('pagination previous'));
    expect(getByLabelText('pagination previous')).toBeTruthy();
    fireEvent.click(getByLabelText('pagination previous'));
    expect(mockOnChange).not.toHaveBeenCalled();
    await waitFor(() => getByText('1-10 of 100 results'));
    expect(getByText('1-10 of 100 results')).toBeTruthy();
  });

  it('handles next button click', async () => {
    const mockOnChange = jest.fn();
    const { baseElement, getByText, getByLabelText } = render(
      <Pagination
        currentPage={2}
        total={100}
        pageSize={10}
        onChange={mockOnChange}
        separatorText={'of'}
        resultText={'results'}
        entriesText={'entries per page'}
      />
    );

    expect(baseElement).toBeTruthy();
    await waitFor(() => getByLabelText('pagination next'));
    expect(getByLabelText('pagination next')).toBeTruthy();
    fireEvent.click(getByLabelText('pagination next'));
    expect(mockOnChange).toHaveBeenCalled();
    await waitFor(() => getByText('21-30 of 100 results'));
    expect(getByText('21-30 of 100 results')).toBeTruthy();
  });

  it('handles page number button click', async () => {
    const mockOnChange = jest.fn();
    const { baseElement, getByText } = render(
      <Pagination
        currentPage={2}
        total={100}
        pageSize={10}
        onChange={mockOnChange}
        separatorText={'of'}
        resultText={'results'}
        entriesText={'entries per page'}
      />
    );

    expect(baseElement).toBeTruthy();
    await waitFor(() => getByText('3'));
    expect(getByText('3')).toBeTruthy();
    fireEvent.click(getByText('3'));
    expect(mockOnChange).toHaveBeenCalled();
    await waitFor(() => getByText('21-30 of 100 results'));
    expect(getByText('21-30 of 100 results')).toBeTruthy();
  });

  it('handles page size change', async () => {
    const mockOnChange = jest.fn();
    const { baseElement, getByText, getByLabelText, getByTestId } = render(
      <Pagination
        currentPage={1}
        total={100}
        pageSize={10}
        onChange={mockOnChange}
        separatorText={'of'}
        resultText={'results'}
        entriesText={'entries per page'}
        entriesPerPage={true}
      />
    );

    expect(baseElement).toBeTruthy();
    await waitFor(() => getByText('entries per page'));
    expect(getByText('entries per page')).toBeTruthy();
    await waitFor(() => getByLabelText('btn dropdown button'));
    expect(getByLabelText('btn dropdown button')).toBeTruthy();
    fireEvent.click(getByLabelText('btn dropdown button'));
    await waitFor(() => getByTestId('dropdown-item-20'));
    fireEvent.click(getByTestId('dropdown-item-20'));
    expect(mockOnChange).toHaveBeenCalled();
    await waitFor(() => getByText('1-10 of 100 results'));
    expect(getByText('1-10 of 100 results')).toBeTruthy();
  });

  it('renders correct page buttons based on maxVisiblePages', async () => {
    const mockOnChange = jest.fn();
    const { baseElement, getByText, getAllByLabelText } = render(
      <Pagination
        currentPage={5}
        total={100}
        pageSize={10}
        onChange={mockOnChange}
        separatorText={'of'}
        resultText={'results'}
        entriesText={'entries per page'}
        entriesPerPage={true}
      />
    );

    expect(baseElement).toBeTruthy();
    await waitFor(() => getByText('1'));
    expect(getByText('1')).toBeTruthy();
    await waitFor(() => getAllByLabelText('pagination threedots'));
    expect(getAllByLabelText('pagination threedots')).toBeTruthy();
    await waitFor(() => getByText('3'));
    expect(getByText('3')).toBeTruthy();
    await waitFor(() => getByText('4'));
    expect(getByText('4')).toBeTruthy();
    await waitFor(() => getByText('5'));
    expect(getByText('5')).toBeTruthy();
    await waitFor(() => getByText('6'));
    expect(getByText('6')).toBeTruthy();
    await waitFor(() => getByText('7'));
    expect(getByText('7')).toBeTruthy();
    await waitFor(() => getByText('41-50 of 100 results'));
    expect(getByText('41-50 of 100 results')).toBeTruthy();
  });

  it('renders correct number of entries in the middle of the page range', async () => {
    const mockOnChange = jest.fn();
    const { baseElement, getByText } = render(
      <Pagination
        currentPage={6}
        total={100}
        pageSize={10}
        onChange={mockOnChange}
        separatorText={'of'}
        resultText={'results'}
        entriesText={'entries per page'}
        entriesPerPage={true}
      />
    );

    expect(baseElement).toBeTruthy();
    await waitFor(() => getByText('51-60 of 100 results'));
    expect(getByText('51-60 of 100 results')).toBeTruthy();
  });
});
