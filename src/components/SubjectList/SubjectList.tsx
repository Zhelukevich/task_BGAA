import React from 'react';

import { SubjectItem } from '@components/SubjectItem';

import { EColor, MyButton } from '@UI/MyButton/MyButton';

import { useAppSelector } from '@hooks/ReduxToolkit-hooks';


import style from './subjectList.css';



export function SubjectList() {
  const subjectList = useAppSelector(state => state.apiSubject.subject);
  return (
    <section className={style.subjectList}>
      <ul className={style.list}>
        {subjectList.data.map((item) => (
          <SubjectItem
            key={item.uniqueId}
            data={item} />
        ))}
      </ul>
      <MyButton
        color={EColor.f2}
        label="Сохранить"
        onClick={() => console.log('11')}
        ariaLabel="Сохранить таблицу" />
    </section>
  );
}

