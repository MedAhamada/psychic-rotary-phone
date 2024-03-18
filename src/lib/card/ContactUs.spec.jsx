import { render } from '@testing-library/react';
import ContactUs from './ContactUs';

describe('ContactUs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactUs />);
    expect(baseElement).toBeTruthy();
  });
});
