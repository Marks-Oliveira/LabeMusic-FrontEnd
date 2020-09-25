import React from 'react';
import { render } from '@testing-library/react';
import Login from '../../pages/Login';

describe("Testing login page", () => {

  test('Renders elements correctly', () => {
    const { getByTestId, getByText } = render(<Login />);

    const userInput = getByTestId('user-input');
    const passwordInput = getByTestId('password-input');
    const button = getByText('Entrar');
    const linkGoToSignup = getByText(/conta/);

    expect(userInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(linkGoToSignup).toBeInTheDocument();

  });

});