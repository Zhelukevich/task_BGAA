import React, { ChangeEvent } from 'react';

import style from './inputCount.css';


interface IInputCountProps {
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  ariaLabel?: string
}

export const InputCount = React.memo(function InputCount({ value, onChange, ariaLabel }: IInputCountProps) {
  return (
    <input
      aria-label={ariaLabel}
      className={style.input}
      type="number"
      min="0"
      value={value}
      onChange={onChange}
    />
  );
},
); 