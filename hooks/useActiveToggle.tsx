import { useState } from 'react';

export const useActiveToggle = (initialValue: boolean) => {
  const [isActive, setActive] = useState(initialValue);

  const handleClick = () => {
    setActive(!isActive);
  };

  return { handleClick, isActive };
};
