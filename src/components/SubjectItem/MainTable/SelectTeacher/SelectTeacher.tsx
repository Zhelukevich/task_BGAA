import React, { useEffect, useMemo, useState } from 'react';
import Select, { PropsValue } from 'react-select';
import { useAppSelector } from '@hooks/ReduxToolkit-hooks';

import { TypeSelect } from '../MainTable';

interface ISelectTeacherProps {
  className?: string;
  isDisabled: boolean;
  name?: string;
  value: PropsValue<object> | undefined;
  defaultValue: { value: string, label: string };
  onChange: (e: TypeSelect) => void;
}


export const SelectTeacher = React.memo(function SelectTeacher({
  className,
  onChange,
  name,
  value,
  defaultValue,
  isDisabled = false,
}: ISelectTeacherProps) {
  const subjectList = useAppSelector(state => state.apiSubject.subject);
  const [selectedOption, setSelectedOption] = useState<PropsValue<object> | undefined>(null);

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);
  const teachers = useMemo(() => {
    if (subjectList.teachers) {
      return subjectList.teachers.map(subject => ({
        value: subject.id,
        label: subject.name,
      }));
    }
    return [];
  }, [subjectList.teachers]);

  return (
    <Select
      value={selectedOption}
      onChange={onChange}
      className={className}
      defaultValue={defaultValue}
      isDisabled={isDisabled}
      options={teachers}
      name={name}
    />
  );
});
