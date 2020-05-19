import React from 'react';
import { render, queryByAttribute } from '@testing-library/react';
import App from './App';

test('renders login element', () => {
  const { getByText } = render(<App />);

  const loginElement = getByText(/login/i);
  expect(loginElement).toBeInTheDocument();
});

test('renders register elements', () => {
  const { getByText } = render(<App />);

  const registerElement = getByText(/register/i);
  expect(registerElement).toBeInTheDocument();
});

test('renders tasks elements', () => {
  const { getByText } = render(<App />);

  const tasksElement = getByText(/tasks/i);
  expect(tasksElement).toBeInTheDocument();
});

test('renders comments elements', () => {
  const { getByText } = render(<App />);

  const commentsElement = getByText(/comments/i);

  expect(commentsElement).toBeInTheDocument();
});

test('login as admin - unsecure', () => {
  const { getAllByPlaceholderText, getByText, getAllByText } = render(<App />);

  const secureElement = getByText('Secure').click();
  const loginButton = getByText('Login');
  const loginUsernameInput = getAllByPlaceholderText('username')[0]; 
  const loginPasswordInput = getAllByPlaceholderText('password')[0];

  const unsecureElement = getByText('Unsecure');

  loginUsernameInput.value = 'admin'; 
  loginPasswordInput.value = '{$gt: ""}';

  const submitElement = getAllByText('Submit')[0].click(); 

  let logoutButton = getByText('Logout'); 
  expect(logoutButton).toBeInTheDocument();
  
});

test('login as admin - secure', () => {
  const { getAllByPlaceholderText, getByText, getAllByText } = render(<App />);

  const loginButton = getByText('Login');
  const loginUsernameInput = getAllByPlaceholderText('username')[0]; 
  const loginPasswordInput = getAllByPlaceholderText('password')[0];

  loginUsernameInput.value = 'admin'; 
  loginPasswordInput.value = 'admin';

  const submitElement = getAllByText('Submit')[0].click(); 

    let logoutButton = getByText('Logout'); 
  expect(logoutButton).toBeInTheDocument();
});
