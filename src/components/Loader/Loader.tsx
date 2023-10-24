import React from 'react';

import style from './Loader.css';

export function Loader() {
  return (
    <div className={style.wrapper}>
      <span className={style.loader}></span>
    </div>

  );
}
