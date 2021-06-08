import React from 'react';
import { render } from '../../utils/testUtils';
import { MyCourses } from './MyCourses';

describe('components/MyCourses', () => {
  it('should render', () => {
    const { container } = render(<MyCourses />);
    expect(container).toMatchSnapshot();
  });
});
