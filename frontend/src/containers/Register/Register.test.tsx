import React from 'react';
import { render } from '../../utils/testUtils';
import { Register } from './Register';

describe('components/Register', () => {
  it('should render', () => {
    const { container } = render(<Register />);
    expect(container).toMatchSnapshot();
  });
});
