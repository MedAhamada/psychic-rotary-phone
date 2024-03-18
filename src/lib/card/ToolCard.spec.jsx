import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import ToolCard from './ToolCard';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('ToolCard component', () => {
  it('renders correctly with active status', () => {
    const props = {
      status: 'active',
      title: 'title.png',
      statusText: 'Active',
      description: 'Test Description',
      date: '2024-02-14',
      analyses: 5,
      image: 'test.jpg',
      to: '/test',
    };

    render(
      <BrowserRouter>
        <ToolCard {...props} />
      </BrowserRouter>
    );

    const image = screen.getByRole('img', { name: /test description/i });
    const title = screen.getByRole('img', { name: /title card/i });

    const description = screen.getByText(/test description/i);

    const date = screen.getByText('2024-02-14');
    const analyses = screen.getByText(/5/i);
    const statue = screen.getByText(/active/i);
    const link = screen.getByRole('link', { name: /test/i });

    expect(description).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(analyses).toBeInTheDocument();
    expect(statue).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  it('renders correctly with inactive status', () => {
    const props = {
      status: 'inactive',
      title: 'title.png',
      statusText: 'Inactive',
      description: 'Test Description',
      date: '2024-02-14',
      analyses: 5,
      image: 'test.jpg',
    };

    render(<ToolCard {...props} />);

    const title = screen.getByRole('img', { name: /title card/i });
    const description = screen.getByText(/test description/i);
    const image = screen.getByRole('img', { name: /test description/i });
    const statue = screen.getByText(/inactive/i);

    const button = screen.getByRole('button');
    const link = screen.queryByRole('link', { name: /test/i });
    const date = screen.queryByText('2024-02-14');
    const analyses = screen.queryByText(/5/i);

    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(statue).toBeInTheDocument();
    expect(link).not.toBeInTheDocument();
    expect(date).not.toBeInTheDocument();
    expect(analyses).not.toBeInTheDocument();
  });

  it('does not render footer with unavailable status', () => {
    const props = {
      status: 'unavailable',
      title: 'title.png',
      statusText: 'Unavailable',
      description: 'Test Description',
      image: 'test.jpg',
      date: '2024-02-14',
      analyses: 5,
    };

    render(<ToolCard {...props} />);

    const title = screen.getByRole('img', { name: /title card/i });
    const description = screen.getByText(/test description/i);
    const image = screen.getByRole('img', { name: /test description/i });
    const statue = screen.getByText(/unavailable/i);

    const button = screen.getByRole('button');
    const link = screen.queryByRole('link', { name: /test/i });
    const date = screen.queryByText('2024-02-14');
    const analyses = screen.queryByText(/5/i);

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
