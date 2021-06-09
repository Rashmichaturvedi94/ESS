import React from 'react';
import { render } from '../../utils/testUtils';
import { CourseDetailSubscribe } from './CourseDetailSubscribe';

describe('components/CourseDetailSubscribe', () => {
  it('should render', () => {
    const { container } = render(<CourseDetailSubscribe />);
    expect(container).toMatchSnapshot();
  });
});
