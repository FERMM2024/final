import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders portfolio app successfully', () => {
  render(<App />);
  // Verificar que la aplicación se renderiza sin errores
  // Buscar el primer elemento con el nombre (header)
  const nameElements = screen.getAllByText('Juan Pérez Developer');
  expect(nameElements[0]).toBeInTheDocument();
  
  // Verificar que se renderiza el título (puede aparecer múltiples veces)
  const titleElements = screen.getAllByText('Desarrollador Full Stack');
  expect(titleElements[0]).toBeInTheDocument();
});
