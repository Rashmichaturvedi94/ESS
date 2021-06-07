import React from 'react';
import { render } from '../../utils/testUtils';
import { ProfileForm } from './ProfileForm';

describe('components/ProfileForm', () => {
  it('should render', () => {
    const { container } = render(<ProfileForm />);
    expect(container).toMatchSnapshot();
  });
});
