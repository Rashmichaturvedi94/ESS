import React from 'react';
import { render } from '../../utils/testUtils';
import { CreateCourseContentForm } from './CreateCourseContentForm';

describe('components/ProfileForm', () => {
  it('should render', () => {
    const { container } = render(<CreateCourseContentForm />);
    expect(container).toMatchSnapshot();
  });
});
