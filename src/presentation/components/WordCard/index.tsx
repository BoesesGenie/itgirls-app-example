import React, { FC } from 'react';
import Word from '../../../domain/model/Word';

interface WordCardProps {
  word: Word;
}

const WordCard: FC<WordCardProps> = ({ word }) => {
  console.log('RENDER WordCard');

  return (
    <div>
      <div>{word.word}</div>
      <div>{word.transcription}</div>
      <div>{word.translation}</div>
    </div>
  );
};

export { WordCard };
