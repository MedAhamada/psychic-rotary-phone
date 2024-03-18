import React from 'react';
import { render } from '@testing-library/react';
import { MemberChip, WorkspaceChip } from './chip';
describe('Member Chip Component', function () {
  var defaultProps = {
    imgSrc: 'https://placehold.co/100',
    name: 'John Doe',
    staff: 'Developer',
    status: 'active'
  };
  it('renders member chip successfully', function () {
    var _render = render( /*#__PURE__*/React.createElement(MemberChip, defaultProps)),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
  it('renders workspace chip successfully', function () {
    var _render2 = render( /*#__PURE__*/React.createElement(WorkspaceChip, {
        title: "Workspace Title",
        subtitle: "Subtitle",
        img: "https://placehold.co/100"
      })),
      baseElement = _render2.baseElement;
    expect(baseElement).toBeTruthy();
  });
});