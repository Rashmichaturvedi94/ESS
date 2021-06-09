import React from 'react';
import { render } from '../../utils/testUtils';
import { Course } from './Course';

describe('components/Course', () => {
  it('should render', () => {
    const { container } = render(<Course />);
    expect(container).toMatchSnapshot();
  });
});
