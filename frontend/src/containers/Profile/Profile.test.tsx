import React from 'react';
import { render } from '../../utils/testUtils';
import { Profile } from './Profile';

describe('components/Profile', () => {
  it('should render', () => {
    const { container } = render(<Profile />);
    expect(container).toMatchSnapshot();
  });
});
