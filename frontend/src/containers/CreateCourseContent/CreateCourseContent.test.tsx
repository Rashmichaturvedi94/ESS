import React from 'react';
import { render } from '../../utils/testUtils';
import { CreateCourseContent } from './CreateCourseContent';


describe('components/CreateCourseContent', () => {
  it('should render', () => {
    const { container } = render(<CreateCourseContent />);
    expect(container).toMatchSnapshot();
  });
});
