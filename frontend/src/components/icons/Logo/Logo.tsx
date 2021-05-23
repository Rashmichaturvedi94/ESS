import React, { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as LogoComponent } from './logo.svg';

export const Logo: FC<SvgIconProps> = (props) => (
  <SvgIcon component={LogoComponent} {...props} />
);
