import React from 'react';
import { render } from '../../utils/testUtils';
import { SubscriptionForm } from './SubscriptionForm';

describe('components/SubscriptionForm', () => {
  it('should render', () => {
    const { container } = render(<SubscriptionForm />);
    expect(container).toMatchSnapshot();
  });
});
