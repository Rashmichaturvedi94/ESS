import React from 'react';
import { render } from '../../utils/testUtils';
import { Subscription } from './Subscription';

describe('components/Subscription', () => {
  it('should render', () => {
    const { container } = render(<Subscription />);
    expect(container).toMatchSnapshot();
  });
});
