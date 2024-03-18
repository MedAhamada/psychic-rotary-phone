import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from './loader';

describe('Loader Component', () => {
  it('renders the default loader', () => {
    const { getByTestId } = render(<Loader />);
    expect(getByTestId('default-loader')).toBeTruthy();
  });

  it('renders the border-top loader', () => {
    const { getByTestId } = render(<Loader variant="border-top" />);
    expect(getByTestId('border-top-loader')).toBeTruthy();
  });

  it('renders the dots loader', () => {
    const { getByTestId } = render(<Loader variant="dots" />);
    expect(getByTestId('dots-loader')).toBeTruthy();
    expect(getByTestId('dot1')).toBeTruthy();
    expect(getByTestId('dot2')).toBeTruthy();
    expect(getByTestId('dot3')).toBeTruthy();
  });
});
