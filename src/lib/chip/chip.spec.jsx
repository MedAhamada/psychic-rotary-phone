import React from 'react';
import { render } from '@testing-library/react';
import { MemberChip, WorkspaceChip } from './chip';

describe('Member Chip Component', () => {
  const defaultProps = {
    imgSrc: 'https://placehold.co/100',
    name: 'John Doe',
    staff: 'Developer',
    status: 'active',
  };

  it('renders member chip successfully', () => {
    const { baseElement } = render(<MemberChip {...defaultProps} />);
    expect(baseElement).toBeTruthy();
  });

  it('renders workspace chip successfully', () => {
    const { baseElement } = render(
      <WorkspaceChip
        title="Workspace Title"
        subtitle="Subtitle"
        img="https://placehold.co/100"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
