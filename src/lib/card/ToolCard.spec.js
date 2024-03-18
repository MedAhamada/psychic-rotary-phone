import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import ToolCard from './ToolCard';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
describe('ToolCard component', function () {
  it('renders correctly with active status', function () {
    var props = {
      status: 'active',
      title: 'title.png',
      statusText: 'Active',
      description: 'Test Description',
      date: '2024-02-14',
      analyses: 5,
      image: 'test.jpg',
      to: '/test'
    };
    render( /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(ToolCard, props)));
    var image = screen.getByRole('img', {
      name: /test description/i
    });
    var title = screen.getByRole('img', {
      name: /title card/i
    });
    var description = screen.getByText(/test description/i);
    var date = screen.getByText('2024-02-14');
    var analyses = screen.getByText(/5/i);
    var statue = screen.getByText(/active/i);
    var link = screen.getByRole('link', {
      name: /test/i
    });
    expect(description).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(analyses).toBeInTheDocument();
    expect(statue).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
  it('renders correctly with inactive status', function () {
    var props = {
      status: 'inactive',
      title: 'title.png',
      statusText: 'Inactive',
      description: 'Test Description',
      date: '2024-02-14',
      analyses: 5,
      image: 'test.jpg'
    };
    render( /*#__PURE__*/React.createElement(ToolCard, props));
    var title = screen.getByRole('img', {
      name: /title card/i
    });
    var description = screen.getByText(/test description/i);
    var image = screen.getByRole('img', {
      name: /test description/i
    });
    var statue = screen.getByText(/inactive/i);
    var button = screen.getByRole('button');
    var link = screen.queryByRole('link', {
      name: /test/i
    });
    var date = screen.queryByText('2024-02-14');
    var analyses = screen.queryByText(/5/i);
    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(statue).toBeInTheDocument();
    expect(link).not.toBeInTheDocument();
    expect(date).not.toBeInTheDocument();
    expect(analyses).not.toBeInTheDocument();
  });
  it('does not render footer with unavailable status', function () {
    var props = {
      status: 'unavailable',
      title: 'title.png',
      statusText: 'Unavailable',
      description: 'Test Description',
      image: 'test.jpg',
      date: '2024-02-14',
      analyses: 5
    };
    render( /*#__PURE__*/React.createElement(ToolCard, props));
    var title = screen.getByRole('img', {
      name: /title card/i
    });
    var description = screen.getByText(/test description/i);
    var image = screen.getByRole('img', {
      name: /test description/i
    });
    var statue = screen.getByText(/unavailable/i);
    var button = screen.getByRole('button');
    var link = screen.queryByRole('link', {
      name: /test/i
    });
    var date = screen.queryByText('2024-02-14');
    var analyses = screen.queryByText(/5/i);
    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(statue).toBeInTheDocument();
    expect(link).not.toBeInTheDocument();
    expect(date).not.toBeInTheDocument();
    expect(analyses).not.toBeInTheDocument();
  });
});