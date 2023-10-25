import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Icon } from '@components/Icon';
import { MyButton } from '@UI/MyButton';
import { useAppDispatch } from '@hooks/ReduxToolkit-hooks';
import { updateExamTeacher, updateLaboratoryTeacher, updateLectureTeacher, updateNumberOfPeople, updateOffsetTeacher, updatePracticeTeacher, updateSeminarTeacher } from '@store/slice/apiSubjectSlice';

import { SubjectType } from '../../../../types/subject';

import style from './mainTable.css';
import { AdditionalInfo } from './AdditionalInfo';
import { SelectItem } from './SelectItem';
import { InputCount } from './InputCount';

interface IMainTableProps {
  data: SubjectType;
};

export interface TypeSelect {
  value: string;
  label: string;
}

export const MainTable = React.memo(function MainTable({ data }: IMainTableProps) {
  const dispatch = useAppDispatch();
  const [defaultValue] = useState({ value: '', label: 'Вакансия' });

  const [selectLectures, setSelectLectures] = useState<TypeSelect>(defaultValue);
  const [selectLaboratory, setSelectLaboratory] = useState<TypeSelect>(defaultValue);
  const [selectPractic, setSelectPractic] = useState<TypeSelect>(defaultValue);
  const [selectSeminar, setSelectSeminar] = useState<TypeSelect>(defaultValue);
  const [selectOffset, setSelectOffset] = useState<TypeSelect>(defaultValue);
  const [selectExam, setSelectExam] = useState<TypeSelect>(defaultValue);

  const [selectLectures_1, setSelectLectures_1] = useState<TypeSelect>(defaultValue);
  const [selectLaboratory_1, setSelectLaboratory_1] = useState<TypeSelect>(defaultValue);
  const [selectPractic_1, setSelectPractic_1] = useState<TypeSelect>(defaultValue);
  const [selectSeminar_1, setSelectSeminar_1] = useState<TypeSelect>(defaultValue);
  const [selectOffset_1, setSelectOffset_1] = useState<TypeSelect>(defaultValue);
  const [selectExam_1, setSelectExam_1] = useState<TypeSelect>(defaultValue);

  const [subgroupOpen, setSubgroupOpen] = useState<boolean>(false);

  const [input1Value, setInput1Value] = useState<number>(+data.podgroups[0]?.countStudents);
  const [input2Value, setInput2Value] = useState<number>(+data.podgroups[1]?.countStudents);

  const handlerOpenSubgroup = () => {
    setSubgroupOpen(true);
  };

  const handlerCloseSubgroup = () => {
    setSubgroupOpen(false);
  };

  useEffect(() => {
    if (data.lecturesHours !== '0') {
      dispatch(updateLectureTeacher({ uniqueId: data.uniqueId, lectureTeacher: selectLectures.value, index: 0 }));
      dispatch(updateLectureTeacher({ uniqueId: data.uniqueId, lectureTeacher: selectLectures_1.value, index: 1 }));
    } else {
      dispatch(updateLectureTeacher({ uniqueId: data.uniqueId, lectureTeacher: '', index: 0 }));
      dispatch(updateLectureTeacher({ uniqueId: data.uniqueId, lectureTeacher: '', index: 1 }));
    }

    if (data.laboratoryHours !== '0') {
      dispatch(updateLaboratoryTeacher({ uniqueId: data.uniqueId, laboratoryTeacher: selectLaboratory.value, index: 0 }));
      dispatch(updateLaboratoryTeacher({ uniqueId: data.uniqueId, laboratoryTeacher: selectLaboratory_1.value, index: 1 }));
    } else {
      dispatch(updateLaboratoryTeacher({ uniqueId: data.uniqueId, laboratoryTeacher: '', index: 0 }));
      dispatch(updateLaboratoryTeacher({ uniqueId: data.uniqueId, laboratoryTeacher: '', index: 1 }));
    }

    if (data.practicHours !== '0') {
      dispatch(updatePracticeTeacher({ uniqueId: data.uniqueId, practiceTeacher: selectPractic.value, index: 0 }));
      dispatch(updatePracticeTeacher({ uniqueId: data.uniqueId, practiceTeacher: selectPractic_1.value, index: 1 }));
    } else {
      dispatch(updatePracticeTeacher({ uniqueId: data.uniqueId, practiceTeacher: '', index: 0 }));
      dispatch(updatePracticeTeacher({ uniqueId: data.uniqueId, practiceTeacher: '', index: 1 }));
    }

    if (data.seminarHours !== '0') {
      dispatch(updateSeminarTeacher({ uniqueId: data.uniqueId, seminarTeacher: selectSeminar.value, index: 0 }));
      dispatch(updateSeminarTeacher({ uniqueId: data.uniqueId, seminarTeacher: selectSeminar_1.value, index: 1 }));
    } else {
      dispatch(updateSeminarTeacher({ uniqueId: data.uniqueId, seminarTeacher: '', index: 0 }));
      dispatch(updateSeminarTeacher({ uniqueId: data.uniqueId, seminarTeacher: '', index: 1 }));
    }

    if (data.exam === true) {
      dispatch(updateExamTeacher({ uniqueId: data.uniqueId, examTeacher: selectExam.value, index: 0 }));
      dispatch(updateExamTeacher({ uniqueId: data.uniqueId, examTeacher: selectExam_1.value, index: 1 }));
    } else {
      dispatch(updateExamTeacher({ uniqueId: data.uniqueId, examTeacher: '', index: 0 }));
      dispatch(updateExamTeacher({ uniqueId: data.uniqueId, examTeacher: '', index: 1 }));
    }

    if (data.offset === true) {
      dispatch(updateOffsetTeacher({ uniqueId: data.uniqueId, offsetTeacher: selectOffset.value, index: 0 }));
      dispatch(updateOffsetTeacher({ uniqueId: data.uniqueId, offsetTeacher: selectOffset_1.value, index: 1 }));
    } else {
      dispatch(updateOffsetTeacher({ uniqueId: data.uniqueId, offsetTeacher: '', index: 0 }));
      dispatch(updateOffsetTeacher({ uniqueId: data.uniqueId, offsetTeacher: '', index: 1 }));
    }

  }, [dispatch, selectLectures, selectLaboratory, selectPractic, selectSeminar, selectOffset, selectExam, data.uniqueId, data.lecturesHours, data.laboratoryHours, data.practicHours, data.seminarHours, data.offset, data.exam, selectLectures_1, selectLaboratory_1, selectPractic_1, selectSeminar_1, selectExam_1, selectOffset_1]);

  const handlerSortDown = useCallback(() => {
    setSelectLectures(selectLectures);
    setSelectLaboratory(selectLectures);
    setSelectPractic(selectLectures);
    setSelectSeminar(selectLectures);
    setSelectOffset(selectLectures);
    setSelectExam(selectLectures);
  }, [selectLectures]);

  const handlerSortDown_1 = useCallback(() => {
    setSelectLectures_1(selectLectures_1);
    setSelectLaboratory_1(selectLectures_1);
    setSelectPractic_1(selectLectures_1);
    setSelectSeminar_1(selectLectures_1);
    setSelectOffset_1(selectLectures_1);
    setSelectExam_1(selectLectures_1);
  }, [selectLectures_1]);

  const handleSelectTeacher = useCallback((selectedOption, type: string) => {
    switch (type) {
      case 'lectures':
        setSelectLectures(selectedOption);
        dispatch(updateLectureTeacher({ uniqueId: data.uniqueId, lectureTeacher: selectedOption.value, index: 0 }));
        break;
      case 'laboratory':
        setSelectLaboratory(selectedOption);
        dispatch(updateLaboratoryTeacher({ uniqueId: data.uniqueId, laboratoryTeacher: selectedOption.value, index: 0 }));
        break;
      case 'practic':
        setSelectPractic(selectedOption);
        dispatch(updatePracticeTeacher({ uniqueId: data.uniqueId, practiceTeacher: selectedOption.value, index: 0 }));
        break;
      case 'seminar':
        setSelectSeminar(selectedOption);
        dispatch(updateSeminarTeacher({ uniqueId: data.uniqueId, seminarTeacher: selectedOption.value, index: 0 }));
        break;
      case 'offset':
        setSelectOffset(selectedOption);
        dispatch(updateOffsetTeacher({ uniqueId: data.uniqueId, offsetTeacher: selectedOption.value, index: 0 }));
        break;
      case 'exam':
        setSelectExam(selectedOption);
        dispatch(updateExamTeacher({ uniqueId: data.uniqueId, examTeacher: selectedOption.value, index: 0 }));
        break;
      default:
        break;
    }
  }, [data.uniqueId, dispatch]);

  const handleSelectTeacherSubgroup = useCallback((selectedOption, type: string) => {
    switch (type) {
      case 'lectures':
        setSelectLectures_1(selectedOption);
        dispatch(updateLectureTeacher({ uniqueId: data.uniqueId, lectureTeacher: selectedOption.value, index: 1 }));
        break;
      case 'laboratory':
        setSelectLaboratory_1(selectedOption);
        dispatch(updateLaboratoryTeacher({ uniqueId: data.uniqueId, laboratoryTeacher: selectedOption.value, index: 1 }));
        break;
      case 'practic':
        setSelectPractic_1(selectedOption);
        dispatch(updatePracticeTeacher({ uniqueId: data.uniqueId, practiceTeacher: selectedOption.value, index: 1 }));
        break;
      case 'seminar':
        setSelectSeminar_1(selectedOption);
        dispatch(updateSeminarTeacher({ uniqueId: data.uniqueId, seminarTeacher: selectedOption.value, index: 1 }));
        break;
      case 'offset':
        setSelectOffset_1(selectedOption);
        dispatch(updateOffsetTeacher({ uniqueId: data.uniqueId, offsetTeacher: selectedOption.value, index: 1 }));
        break;
      case 'exam':
        setSelectExam_1(selectedOption);
        dispatch(updateExamTeacher({ uniqueId: data.uniqueId, examTeacher: selectedOption.value, index: 1 }));
        break;
      default:
        break;
    }
  }, [data.uniqueId, dispatch]);

  const handleInput1Change = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue <= +data.studentsNumber) {
      setInput1Value(newValue);
      setInput2Value(+data.studentsNumber - newValue);

    }
  }, [data.studentsNumber]);

  const handleInput2Change = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue <= +data.studentsNumber) {
      setInput2Value(newValue);
      setInput1Value(+data.studentsNumber - newValue);

    }
  }, [data.studentsNumber]);

  useEffect(() => {
    dispatch(updateNumberOfPeople({ uniqueId: data.uniqueId, countStudents: input1Value.toString(), index: 0 }));
    dispatch(updateNumberOfPeople({ uniqueId: data.uniqueId, countStudents: input2Value.toString(), index: 1 }));
  }, [data.uniqueId, dispatch, input1Value, input2Value]);



  return (
    <table className={style.table}>
      <colgroup>
        <col width="25%" />
        <col width="5%" />
      </colgroup>
      <colgroup span={data.podgroups.length <= 1 ? 1 : subgroupOpen ? 2 : 1}
        style={{ width: '25%' }}
      />
      <thead className={style.thead}>
        <tr>
          <th>Занятие</th>
          <th>Часы</th>

          {
            data.podgroups.length <= 1 ? (
              <th>Преподаватель</th>
            )
              : subgroupOpen ? (
                <th>Подгруппа 1</th>
              ) : (
                <th className={style.thBtn}>
                  <div >
                    Преподаватель
                    <button
                      aria-label="Открыть подгруппу"
                      onClick={handlerOpenSubgroup}
                      className={style.btn}
                    >
                      <Icon width={15} height={15} name={'Plus'} />
                    </button>
                  </div>
                </th>
              )
          }

          {subgroupOpen && (
            <th className={style.thBtn}>
              <div >
                Подгруппа 2
                <button
                  aria-label="Закрыть подгруппу"
                  onClick={handlerCloseSubgroup}
                  className={style.btn}
                >
                  <Icon width={15} height={15} name={'Delete'} />
                </button>
              </div>
            </th>
          )}

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Лекции</td>
          <td>{data.lecturesHours}</td>
          <td>
            <div className={style.wrapperSelect}>
              <SelectItem
                className={style.select}
                isDisabled={data.lecturesHours === '0' ? true : false}
                defaultValue={defaultValue}
                onChange={(e) => handleSelectTeacher(e, 'lectures')}
                value={data.lecturesHours === '0' ? defaultValue : selectLectures}
              />
              <MyButton
                className={style.sortDownDtm}
                label={<Icon width={20} height={20} name={'SortDown'} />}
                onClick={() => handlerSortDown()}
                ariaLabel="Назначить преподавателя для всех полей" />
            </div>
          </td>
          {subgroupOpen && (
            <td>
              <div className={style.wrapperSelect}>
                <SelectItem
                  className={style.select}
                  isDisabled={data.lecturesHours === '0' ? true : false}
                  defaultValue={defaultValue}
                  onChange={(e) => handleSelectTeacherSubgroup(e, 'lectures')}
                  value={data.lecturesHours === '0' ? defaultValue : selectLectures_1}
                />
                <MyButton
                  className={style.sortDownDtm}
                  label={<Icon width={20} height={20} name={'SortDown'} />}
                  onClick={() => handlerSortDown_1()}
                  ariaLabel="Назначить преподавателя для всех полей" />
              </div>
            </td>
          )}
        </tr>
        <tr>
          <td> Лабораторные работы</td>
          <td>{data.laboratoryHours}</td>
          <td>
            <SelectItem
              isDisabled={data.laboratoryHours === '0' ? true : false}
              defaultValue={defaultValue}
              onChange={(e) => handleSelectTeacher(e, 'laboratory')}
              value={data.laboratoryHours === '0' ? defaultValue : selectLaboratory}
            />
          </td>
          {subgroupOpen && (
            <td>
              <SelectItem
                isDisabled={data.laboratoryHours === '0' ? true : false}
                defaultValue={defaultValue}
                onChange={(e) => handleSelectTeacherSubgroup(e, 'laboratory')}
                value={data.laboratoryHours === '0' ? defaultValue : selectLaboratory_1}
              />
            </td>
          )}
        </tr>
        <tr>
          <td>Практические</td>
          <td>{data.practicHours}</td>
          <td>
            <SelectItem
              isDisabled={data.practicHours === '0' ? true : false}
              defaultValue={defaultValue}
              onChange={(e) => handleSelectTeacher(e, 'practic')}
              value={data.practicHours === '0' ? defaultValue : selectPractic}
            />
          </td>
          {subgroupOpen && (
            <td>
              <SelectItem
                isDisabled={data.practicHours === '0' ? true : false}
                defaultValue={defaultValue}
                onChange={(e) => handleSelectTeacherSubgroup(e, 'practic')}
                value={data.practicHours === '0' ? defaultValue : selectPractic_1}
              />
            </td>
          )}
        </tr>
        <tr>
          <td>Семинарские</td>
          <td>{data.seminarHours}</td>
          <td>
            <SelectItem
              isDisabled={data.seminarHours === '0' ? true : false}
              defaultValue={defaultValue}
              onChange={(e) => handleSelectTeacher(e, 'seminar')}
              value={data.seminarHours === '0' ? defaultValue : selectSeminar}
            />
          </td>
          {subgroupOpen && (
            <td>
              <SelectItem
                isDisabled={data.seminarHours === '0' ? true : false}
                defaultValue={defaultValue}
                onChange={(e) => handleSelectTeacherSubgroup(e, 'seminar')}
                value={data.seminarHours === '0' ? defaultValue : selectSeminar_1}
              />
            </td>
          )}
        </tr>
        {
          data.offset === true ? (
            <tr>
              <td>Зачёт</td>
              <td></td>
              <td>
                <SelectItem
                  isDisabled={false}
                  defaultValue={defaultValue}
                  onChange={(e) => handleSelectTeacher(e, 'offset')}
                  value={selectOffset}
                />
              </td>
              {subgroupOpen && (
                <td>
                  <SelectItem
                    isDisabled={false}
                    defaultValue={defaultValue}
                    onChange={(e) => handleSelectTeacherSubgroup(e, 'offset')}
                    value={selectOffset_1}
                  />
                </td>
              )}
            </tr>
          ) : (
            <></>
          )
        }
        {
          data.exam === true ? (
            <tr>
              <td>Экзамен</td>
              <td></td>
              <td>
                <SelectItem
                  isDisabled={false}
                  defaultValue={defaultValue}
                  onChange={(e) => handleSelectTeacher(e, 'exam')}
                  value={selectExam}
                />
              </td>
              {subgroupOpen && (
                <td>
                  <SelectItem
                    isDisabled={false}
                    defaultValue={defaultValue}
                    onChange={(e) => handleSelectTeacherSubgroup(e, 'exam')}
                    value={selectExam_1}
                  />
                </td>
              )}
            </tr>
          ) : (
            <></>
          )
        }
        {subgroupOpen && (
          <tr>
            <td>Количество человек</td>
            <td></td>
            <td>
              <InputCount
                ariaLabel="Выберете количество человек в подгруппе 1"
                value={input1Value}
                onChange={handleInput1Change}
              />
            </td>
            <td>
              <InputCount
                ariaLabel="Выберете количество человек в подгруппе 2"
                value={input2Value}
                onChange={handleInput2Change}
              />
            </td>
          </tr>
        )}
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
});
