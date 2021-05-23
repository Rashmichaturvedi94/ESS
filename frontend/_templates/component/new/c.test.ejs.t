---
to: <%= root %>/<%= path %>/<%= name %>.test.tsx
---
import React from 'react';
import { render } from '../../utils/testUtils';
import { <%= name %> } from './<%= name %>';

describe('<%= title %>', () => {
  it('should render', () => {
    const { container } = render(<<%= name %> />);
    expect(container).toMatchSnapshot();
  });
});
