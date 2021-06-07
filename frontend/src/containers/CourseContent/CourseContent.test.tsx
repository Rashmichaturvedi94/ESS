import React from 'react';
import { render } from '../../utils/testUtils';
import { CourseContent } from './CourseContent';


describe('components/CourseContent', () => {
  it('should render', () => {
    const { container } = render(<CourseContent />);
    expect(container).toMatchSnapshot();
  });
});
