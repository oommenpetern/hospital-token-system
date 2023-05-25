import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import store from '../redux/store';
import TokenSystem from '../components/TokenSystem';

describe('TokenSystem', () => {
  it('renders TokenSystem component', () => {
    render(
      <Provider store={store}>
        <TokenSystem />
      </Provider>
    );

    expect(screen.getByText('Hospital Token System')).toBeInTheDocument();
  });

  it('generates a token with name', () => {
    render(
      <Provider store={store}>
        <TokenSystem />
      </Provider>
    );

    const nameInput = screen.getByPlaceholderText('Enter Name');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.click(screen.getByText('Generate Token'));

    expect(screen.getByText('Token 1 - John Doe')).toBeInTheDocument();
  });

  it('calls the next token', () => {
    render(
      <Provider store={store}>
        <TokenSystem />
      </Provider>
    );

    const nameInput = screen.getByPlaceholderText('Enter Name');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.click(screen.getByText('Generate Token'));
    fireEvent.click(screen.getByText('Call Next Token'));

    expect(screen.queryByText('Token 1 - John Doe')).not.toBeInTheDocument();
  });
});
