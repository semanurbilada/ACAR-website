import React from 'react';
import { render } from '@testing-library/react';
import App, { StateContext } from '../../App';

// Mock components to simplify tests
jest.mock('../../core/Layout', () => ({ pageContent }) => <div>{pageContent}</div>);
jest.mock('../../pages/Home', () => () => <div>Home</div>);
jest.mock('../../pages/Places', () => () => <div>Places</div>);
jest.mock('../../pages/Products', () => () => <div>Products</div>);
jest.mock('../../pages/About', () => () => <div>About</div>);
jest.mock('../../pages/Contact', () => () => <div>Contact</div>);
jest.mock('../../pages/Language', () => () => <div>Language</div>);

// Test group with describe function
describe('App component', () => {
  // Custom render function to include StateContext provider
  const renderWithContext = (ui, { providerProps, ...renderOptions }) => {
    return render(
      <StateContext.Provider {...providerProps}>{ui}</StateContext.Provider>,
      renderOptions
    );
  };

  // test1
  test('Context provides default language as TR', () => {
    const providerProps = {
      value: {
        language: 'TR',
        setLanguage: jest.fn(),
      },
    };
    renderWithContext(<App />, { providerProps });

    // Check that the default language is 'TR'
    expect(localStorage.getItem('language')).toBe('TR');
  });

  // test2
  test('Context updates language and persists in localStorage', () => {
    const setLanguageMock = jest.fn((lang) => localStorage.setItem('language', lang));
    const providerProps = {
      value: {
        language: 'TR',
        setLanguage: setLanguageMock,
      },
    };
    renderWithContext(<App />, { providerProps });

    // Simulate a language change
    providerProps.value.setLanguage('EN');

    // Check that localStorage is updated to 'EN'
    expect(localStorage.getItem('language')).toBe('EN');
    expect(setLanguageMock).toHaveBeenCalledWith('EN');
  });
});