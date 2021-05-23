import React from 'react';
import { render } from '../../utils/testUtils';
import { SearchCourse } from './SearchCourse';

describe('components/SearchCourse', () => {
  it('should render', () => {
    const { container } = render(<SearchCourse />);
    expect(container).toMatchSnapshot();
  });
});
