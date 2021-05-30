import React from 'react';
import { render } from '../../utils/testUtils';
import { RegisterForm } from './RegisterForm';

describe('components/RegisterForm', () => {
  it('should render', () => {
    const { container } = render(<RegisterForm />);
    expect(container).toMatchSnapshot();
  });
});
