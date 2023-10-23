import React, { ChangeEvent, useState } from 'react';

import style from './additionalInfo.css';

export function AdditionalInfo() {
  const [text, setText] = useState<string>('');

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <textarea
      className={style.textarea}
      value={text}
      onChange={handleTextChange}
    />
  );
}