import React, { ReactNode } from 'react';
import classNames from 'classnames';

import style from './myButton.css';

export enum EColor {
  f1 = 'blue',
  f2 = 'green',
}

interface ButtonProps {
  label: string | ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  color?: EColor;
  ariaLabel: string;
}

export const MyButton = React.memo(function MyButton(props: ButtonProps) {
  const {
    label,
    color = EColor.f1,
    onClick,
    className,
    disabled = false,
    ariaLabel,
  } = props;

  const classes = classNames(
    style.btn,
    style[color],
  );

  return (
    <button
      className={`${classes} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {label}
    </button>
  );
}); 