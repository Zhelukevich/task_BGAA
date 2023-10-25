import * as React from 'react';


interface IconProps {
  width: number;
  height: number;
  className?: string
}

export function Plus(props: IconProps) {
  const {
    width,
    height,
    className,
  } = props;

  return (
    <svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12H18M12 6V18" stroke="#001844" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
