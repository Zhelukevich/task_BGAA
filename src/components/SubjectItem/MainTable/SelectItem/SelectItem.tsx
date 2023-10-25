import React, { useEffect, useMemo, useState } from 'react';
import Select, { PropsValue, SingleValue, ActionMeta } from 'react-select';
import { useAppSelector } from '@hooks/ReduxToolkit-hooks';

interface ISelectItemProps {
  className?: string;
  isDisabled: boolean;
  name?: string;
  value: PropsValue<object> | undefined;
  defaultValue: { value: string, label: string };
  onChange: (newValue: SingleValue<object>, actionMeta: ActionMeta<object>) => void;
}


export const SelectItem = React.memo(function SelectItem({
  className,
  onChange,
  name,
  value,
  defaultValue,
  isDisabled = false,
}: ISelectItemProps) {
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
      placeholder="Вакансия"
      value={selectedOption}
      onChange={onChange}
      className={className}
      defaultValue={defaultValue}
      isDisabled={isDisabled}
      isSearchable={false}
      options={teachers}
      name={name}
      styles={{
        container: (baseStyles, state) => ({
          ...baseStyles,
          fontSize: '12px',
          color: '#001844',
          valueContainer: '#001844',
        }),
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 3,
        colors: {
          ...theme.colors,
          primary25: 'rgb(226, 240, 255)',
          primary: 'rgb(9, 47, 88)',
        },
      })}
    />
  );
});
