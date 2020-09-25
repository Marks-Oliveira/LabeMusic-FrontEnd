import React from 'react';
import { render } from '@testing-library/react';
import Signup from '../../pages/Signup';

describe("Testing signup page", () => {

  test('Renders elements correctly', () => {
    const { getByTestId, getByText } = render(<Signup />);

    const nameInput = getByTestId('name-input');
    const nicknameInput = getByTestId('nickname-input');
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const button = getByText('Entrar');
    const linkGoToLogin = getByText(/possui conta/);

    expect(nameInput).toBeInTheDocument();
    expect(nicknameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(linkGoToLogin).toBeInTheDocument();

  });

});
