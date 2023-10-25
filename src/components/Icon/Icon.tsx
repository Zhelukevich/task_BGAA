import React from 'react';

import { Plus, SortDown, Delete } from './icons';

interface IconProps {
  width: number;
  height: number;
  className?: string;
  name: string;
};

export function Icon(props: IconProps) {
  switch (props.name) {
    case 'Plus':
      return <Plus {...props} />;
    case 'SortDown':
      return <SortDown {...props} />;
    case 'Delete':
      return <Delete {...props} />;
    default:
      return <></>;
  }
}
