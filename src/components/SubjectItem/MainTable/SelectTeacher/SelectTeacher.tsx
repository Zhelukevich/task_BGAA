import { useAppSelector } from '@hooks/ReduxToolkit-hooks';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';


type SelectType = {
  value: string,
  label: string,
}


export function SelectTeacher() {
  const subjectList = useAppSelector(state => state.apiSubject.subject);

  const [teachers, setTeachers] = useState<SelectType[]>([
    { value: 'Вакансия', label: 'Вакансия' },
  ]);

  useEffect(() => {
    const newTeachers = subjectList.teachers.map(subject => ({
      value: subject.id,
      label: subject.name,
    }));

    setTeachers([...teachers, ...newTeachers]);
  }, [subjectList]);

  return (
    <Select
      defaultValue={teachers[0]}
      isDisabled={false}
      options={teachers}
    />
  );
}
