import React, { FC, useState } from 'react';
import { Button } from './ui-kit/Button';
import { WordCard } from './components/WordCard';
import Word from '../domain/model/Word';
import './assets/global.scss';

const App: FC = () => {
  const [word, setWord] = useState(
    new Word('translation', '[trænsˈleɪʃən]', 'перевод'),
  );

  const onButtonClick = () => {
    const word = new Word('word', 'asdfasdf', 'слово');

    setWord(word);
  };

  console.log('RENDER App');

  return (
    <React.StrictMode>
      <WordCard word={word} />
      <Button onClick={onButtonClick}>Кнопка</Button>
    </React.StrictMode>
  );
};

export { App };
