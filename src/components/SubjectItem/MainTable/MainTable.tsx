import React, { useState } from 'react';
import { Icon } from '@components/Icon';
import { MyButton } from '@UI/MyButton';
import { useAppDispatch } from '@hooks/ReduxToolkit-hooks';
import { updateExamTeacher, updateLaboratoryTeacher, updateOffsetTeacher, updatePracticeTeacher, updateSeminarTeacher } from '@store/slice/apiSubjectSlice';

import { SubjectType } from '../../../../types/subject';

import style from './mainTable.css';
import { AdditionalInfo } from './AdditionalInfo';
import { SelectTeacher } from './SelectTeacher';


interface IMainTableProps {
  data: SubjectType;
};

export interface TypeSelect {
  value: string;
  label: string;
}

export function MainTable({ data }: IMainTableProps) {
  // const dispatch = useAppDispatch();
  const [defaultValue] = useState({ value: 'Вакансия', label: 'Вакансия' });
  const [selectLectures, setSelectLectures] = useState<TypeSelect | null>(defaultValue);
  const [selectLaboratory, setSelectLaboratory] = useState<TypeSelect | null>(defaultValue);
  const [selectPractic, setSelectPractic] = useState<TypeSelect | null>(defaultValue);
  const [selectSeminar, setSelectSeminar] = useState<TypeSelect | null>(defaultValue);
  const [selectOffset, setSelectOffset] = useState<TypeSelect | null>(defaultValue);
  const [selectExam, setSelectExam] = useState<TypeSelect | null>(defaultValue);


  const handlerSortDown = () => {
    setSelectLectures(selectLectures);
    setSelectLaboratory(selectLectures);
    setSelectPractic(selectLectures);
    setSelectSeminar(selectLectures);
    setSelectOffset(selectLectures);
    setSelectExam(selectLectures);
  };

  const handlerSelectLectures = (selectedOption: TypeSelect | null) => {
    setSelectLectures(selectedOption);
  };

  const handlerSelectLaboratory = (selectedOption: TypeSelect | null) => {
    setSelectLaboratory(selectedOption);
    // const updatedData = {
    //   uniqueId: data.uniqueId,
    //   laboratoryTeacher: e.value,
    // };
    // dispatch(updateLaboratoryTeacher(e.value));
  };

  const handlerSelectPractic = (selectedOption: TypeSelect | null) => {
    setSelectPractic(selectedOption);
    // const updatedData = {
    //   uniqueId: data.uniqueId,
    //   practiceTeacher: e.value,
    // };
    // dispatch(updatePracticeTeacher(e.value));
  };

  const handlerSelectSeminar = (selectedOption: TypeSelect | null) => {
    setSelectSeminar(selectedOption);
    // const updatedData = {
    //   uniqueId: data.uniqueId,
    //   seminarTeacher: e.value,
    // };
    // dispatch(updateSeminarTeacher(e.value));
  };

  const handlerSelectOffset = (selectedOption: TypeSelect | null) => {
    setSelectOffset(selectedOption);
    // const updatedData = {
    //   uniqueId: data.uniqueId,
    //   offsetTeacher: e.value,
    // };
    // dispatch(updateOffsetTeacher(e.value));
  };

  const handlerSelectExam = (selectedOption: TypeSelect | null) => {
    setSelectExam(selectedOption);
    // const updatedData = {
    //   uniqueId: data.uniqueId,
    //   examTeacher: e.value,
    // };
    // dispatch(updateExamTeacher(e.value));
  };

  return (
    <table className={style.table}>
      <colgroup>
        <col width="25%" />
        <col width="5%" />
      </colgroup>
      <colgroup span={2} style={{ width: '25%' }} />
      <thead className={style.thead}>
        <tr>
          <th>Занятие</th>
          <th>Часы</th>
          {
            data.podgroups.length === 1 ?
              <th>Преподаватель</th>
              :
              <th className={style.thBtn}>
                <div >
                  Преподаватель
                  <button
                    onClick={() => console.log('Преподаватель')}
                    className={style.btn}
                  >
                    <Icon width={15} height={15} name={'Plus'} />
                  </button>
                </div>
              </th>
          }
          <th>Подгруппа 1</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Лекции</td>
          <td>{data.lecturesHours}</td>
          <td>
            <div className={style.tdSort}>
              <SelectTeacher
                className={style.select}
                isDisabled={data.lecturesHours === '0' ? true : false}
                defaultValue={defaultValue}
                onChange={handlerSelectLectures}
                value={data.lecturesHours === '0' ? defaultValue : selectLectures}
              />
              <MyButton
                label={<Icon width={15} height={15} name={'SortDown'} />}
                onClick={() => handlerSortDown()}
                ariaLabel="Назначить преподавателя для всех полей" />
            </div>
          </td>
        </tr>
        <tr>
          <td> Лабораторные работы</td>
          <td>{data.laboratoryHours}</td>
          <td>
            <SelectTeacher
              isDisabled={data.laboratoryHours === '0' ? true : false}
              defaultValue={defaultValue}
              onChange={handlerSelectLaboratory}
              value={data.laboratoryHours === '0' ? defaultValue : selectLaboratory}
            />
          </td>
        </tr>
        <tr>
          <td>Практические</td>
          <td>{data.practicHours}</td>
          <td>
            <SelectTeacher
              isDisabled={data.practicHours === '0' ? true : false}
              defaultValue={defaultValue}
              onChange={handlerSelectPractic}
              value={data.practicHours === '0' ? defaultValue : selectPractic}
            />
          </td>
        </tr>
        <tr>
          <td>Семинарские</td>
          <td>{data.seminarHours}</td>
          <td>
            <SelectTeacher
              isDisabled={data.seminarHours === '0' ? true : false}
              defaultValue={defaultValue}
              onChange={handlerSelectSeminar}
              value={data.seminarHours === '0' ? defaultValue : selectSeminar}
            />
          </td>
        </tr>
        {
          data.offset === true ?
            <tr>
              <td>Зачёт</td>
              <td></td>
              <td>
                <SelectTeacher
                  isDisabled={false}
                  defaultValue={defaultValue}
                  onChange={handlerSelectOffset}
                  value={selectOffset}
                />
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
                <SelectTeacher
                  isDisabled={false}
                  defaultValue={defaultValue}
                  onChange={handlerSelectExam}
                  value={selectExam}
                />
              </td>
            </tr>
            :
            <></>
        }
        <tr>
          <td>Количество человек</td>
          <td></td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr className={style.note}>
          <td className={style.note_title}>
            Примечание
            <br />
            <span>
              (Для составление расписания)
            </span>
          </td>
          <td></td>
          <td colSpan={10}>
            <AdditionalInfo data={data}
            />
          </td>
        </tr>
      </tbody>
    </table >

  );
}
