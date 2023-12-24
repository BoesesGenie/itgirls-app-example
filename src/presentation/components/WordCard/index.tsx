import React, { FC, useContext } from 'react';
import { WordsContext } from '../../../application/context/WordsContext';

const WordCard: FC = () => {
  const { word } = useContext(WordsContext);

  if (word === null) {
    return null;
  }

  return (
    <div>
      <div>{word.word}</div>
      <div>{word.transcription}</div>
      <div>{word.translation}</div>
    </div>
  );
};

export { WordCard };
