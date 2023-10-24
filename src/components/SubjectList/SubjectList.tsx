import React from 'react';
import { SubjectItem } from '@components/SubjectItem';
import { EColor, MyButton } from '@UI/MyButton/MyButton';
import { useAppDispatch, useAppSelector } from '@hooks/ReduxToolkit-hooks';
import { fetchSentSubject } from '@store/slice/SendDataSubjectSlice';
import { Loader } from '@components/Loader';

import style from './subjectList.css';

export function SubjectList() {
  const { subject, error, loading } = useAppSelector(state => state.apiSubject);
  const sendError = useAppSelector(state => state.sendDataSubject.error);
  const sendLoading = useAppSelector(state => state.sendDataSubject.loading);
  const dispatch = useAppDispatch();

  const handleSendClick = () => {
    dispatch(fetchSentSubject(subject));
  };
  return (

    <section className={style.subjectList}>
      {
        loading ? (
          <Loader />
        ) : error ? (
          <div style={{ color: 'red' }}>Ошибка: {error}</div>
        ) : (
          <>
            <ul className={style.list}>
              {subject.data.map((item) => (
                <SubjectItem
                  key={item.uniqueId}
                  data={item} />
              ))}
            </ul>
            {
              sendLoading ? (
                <Loader />
              ) : sendError ? (
                <div style={{ color: 'red' }}>Ошибка: {sendError}</div>
              ) : (
                <MyButton
                  color={EColor.f2}
                  label="Сохранить"
                  onClick={handleSendClick}
                  ariaLabel="Сохранить таблицу" />
              )
            }
          </>
        )
      }


    </section>
  );
}


