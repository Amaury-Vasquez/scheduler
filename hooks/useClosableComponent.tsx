import { useState } from 'react';

export const useClosableComponent = (
  callback: Function,
  time: number = 200
) => {
  const [willFade, setFade] = useState(false);

  const onClose = () => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
      callback();
    }, time);
  };

  return { onClose, willFade };
};
