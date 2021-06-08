import React from 'react';
import { render } from '../../utils/testUtils';
import { CourseForm } from './CourseForm';

describe('components/ProfileForm', () => {
  it('should render', () => {
    const { container } = render(<CourseForm />);
    expect(container).toMatchSnapshot();
  });
});
