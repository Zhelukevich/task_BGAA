import React from 'react';

import { SubjectType } from '../../../../types/subject';

import style from './generalTable.css';


interface IGeneralTableProps {
  data: SubjectType;
};

export function GeneralTable({ data }: IGeneralTableProps) {
  return (
    <>
      <table className={style.table}>
        <colgroup>
          <col width="30%" />
          <col width="15%" />
          <col width="30%" />
          <col width="15%" />
        </colgroup>
        <tbody>
          <tr>
            <th>Группа</th>
            <td> {data.groupName}</td>
            <th>Курс</th>
            <td>{data.course}</td>
          </tr>
          <tr>
            <th>Количество курсов</th>
            <td>{data.studentsNumber}</td>
            <th>Семестр</th>
            <td>{data.semestr}</td>
          </tr>
        </tbody >
      </table>
      <div className={style.line}></div>
    </>
  );
}
