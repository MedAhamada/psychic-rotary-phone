import { render } from '@testing-library/react';
import Badge from './badge';
describe('Badge', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Badge variant="green" text="Title" size="large" />
    );
    expect(baseElement).toBeTruthy();
  });
});
