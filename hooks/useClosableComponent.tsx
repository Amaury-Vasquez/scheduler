import { useState } from 'react';

export const useClosableComponent = (
  callback: Function,
  time: number = 200,
  args?: any
) => {
  const [willFade, setFade] = useState(false);

  const onClose = () => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
      console.log(args);
      callback(args);
    }, time);
  };

  return { onClose, willFade };
};
