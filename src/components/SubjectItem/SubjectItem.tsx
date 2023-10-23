import React from 'react';

import { SubjectType } from '../../../types/subject';

import { MainTable } from './MainTable';
import { GeneralTable } from './GeneralTable';
import style from './subjectItem.css';

interface ISubjectItemProps {
  data: SubjectType;
};



export function SubjectItem({ data }: ISubjectItemProps) {
  return (
    <li className={style.item}>
      <div className={style.hgroup}>
        <h2 className={style.title}>
          {data.subjectName}
        </h2>
      </div>
      <GeneralTable data={data} />
      <MainTable data={data} />
    </li>
  );
}
