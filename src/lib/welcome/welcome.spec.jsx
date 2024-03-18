import { render } from '@testing-library/react';
import Welcome from './welcome';
describe('Welcome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Welcome title="delo" />);
    expect(baseElement).toBeTruthy();
  });
});
