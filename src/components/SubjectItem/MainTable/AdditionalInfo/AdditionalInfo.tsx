import React, { ChangeEvent, useCallback, useRef, useState } from 'react';

import { useAppDispatch } from '@hooks/ReduxToolkit-hooks';

import { updateAdditionalInfo } from '@store/slice/apiSubjectSlice';

import { SubjectType } from '../../../../../types/subject';

import style from './additionalInfo.css';


interface IAdditionalInfoProps {
  data: SubjectType;
};


export function AdditionalInfo({ data }: IAdditionalInfoProps) {
  const [text, setText] = useState<string>(data?.additionalInfo);
  const dispatch = useAppDispatch();
  const debounceTimeout = useRef<number | undefined>(undefined);

  const handleTextChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      const updatedData = {
        uniqueId: data.uniqueId,
        additionalInfo: newText,
      };
      dispatch(updateAdditionalInfo(updatedData));
    }, 300);
  }, [data.uniqueId, dispatch],
  );

  return (
    <textarea
      className={style.textarea}
      value={text}
      onChange={handleTextChange}
    />
  );
}