import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Componente Home', () => {
    test('renderiza TodoList y TodoForm', () => {
      render(<Home />);
    });
  });
  