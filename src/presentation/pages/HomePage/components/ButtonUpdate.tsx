import React, { FC } from 'react';
import { Button } from '../../../ui-kit/Button';
import { useWordUpdate } from '../../../../application/hooks/handlers/useWordUpdate';

export const ButtonUpdate: FC = () => {
  const updateWord = useWordUpdate();

  const updateHandler = () => {
    updateWord();
  };

  return <Button onClick={updateHandler}>Update</Button>;
};
