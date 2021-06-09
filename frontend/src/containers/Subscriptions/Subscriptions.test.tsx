import React from 'react';
import { render } from '../../utils/testUtils';
import { Subscriptions } from './Subscriptions';

describe('components/Subscriptions', () => {
  it('should render', () => {
    const { container } = render(<Subscriptions />);
    expect(container).toMatchSnapshot();
  });
});
