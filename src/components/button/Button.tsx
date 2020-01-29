import React from 'react';
import { colorTheme } from 'components/typings';

export interface ButtonProps {
  className?: string;
  type?: colorTheme;
  outline?: boolean;
  dashed?: boolean;
  loading?: boolean;
  icon?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = props => {
  return <button className={props.className} children={props.children} />;
};

export default Button;
