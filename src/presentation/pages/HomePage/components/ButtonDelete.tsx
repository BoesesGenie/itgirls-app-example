import React, { FC } from 'react';
import { useWordsDelete } from '../../../../application/hooks/handlers/useWordsDelete';
import { Button } from '../../../ui-kit/Button';
import Word from '../../../../domain/model/Word';

export const ButtonDelete: FC = () => {
  const deleteWord = useWordsDelete();

  const deleteHandler = () => {
    deleteWord(new Word('', '', ''));
  };

  return <Button onClick={deleteHandler}>Delete</Button>;
};
