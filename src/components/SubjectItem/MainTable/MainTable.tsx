import React from 'react';

import { Icon } from '@components/Icon';

import { MyButton } from '@UI/MyButton';

import { SubjectType } from '../../../../types/subject';

import style from './mainTable.css';
import { AdditionalInfo } from './AdditionalInfo';
import { SelectTeacher } from './SelectTeacher';


interface IMainTableProps {
  data: SubjectType;
};

export function MainTable({ data }: IMainTableProps) {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th>Занятие</th>
          <th>Часы</th>
          <th className={style.thBtn}>Преподаватель
            <button
              onClick={() => console.log('Преподаватель')}
              className={style.btn}
            >
              <Icon width={15} height={15} name={'SortDown'} />
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Лекции</td>
          <td>{data.lecturesHours}</td>
          <td>
            <SelectTeacher />
            <MyButton
              label={<Icon width={15} height={15} name={'SortDown'} />}
              onClick={() => console.log('SortDown')}
              ariaLabel="Назначить преподавателя для всех полей" />
          </td>
        </tr>
        <tr>
          <td> Лабораторные работы</td>
          <td>{data.laboratoryHours}</td>
          <td>
            <SelectTeacher />
          </td>
        </tr>
        <tr>
          <td>Практические</td>
          <td>{data.practicHours}</td>
          <td>
            <SelectTeacher />
          </td>
        </tr>
        <tr>
          <td>Семинарские</td>
          <td>{data.seminarHours}</td>
          <td>
            <SelectTeacher />
          </td>
        </tr>
        {
          data.offset === true ?
            <tr>
              <td>Зачёт</td>
              <td></td>
              <td>
                <SelectTeacher />
              </td>
            </tr>
            :
            <></>
        }
        {
          data.exam === true ?
            <tr>
              <td>Экзамен</td>
              <td></td>
              <td>
                <SelectTeacher />
              </td>
            </tr>
            :
            <></>
        }

        <tr className={style.note}>
          <td className={style.note_title}>
            Примечание
            <br />
            <span>
              (Для составление расписания)
            </span>
          </td>
          <td></td>
          <td>
            <AdditionalInfo />
          </td>
        </tr>
      </tbody>
    </table >

  );
}
