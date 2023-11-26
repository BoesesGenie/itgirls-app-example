import React, { FC, useState } from 'react';
import Word from '../../../domain/model/Word';
import { WordCard } from '../../components/WordCard';
import { Button } from '../../ui-kit/Button';
import { Layout } from '../../components/Layout';

const HomePage: FC = () => {
  const [word, setWord] = useState(
    new Word('translation', '[trænsˈleɪʃən]', 'перевод'),
  );

  const onButtonClick = () => {
    const word = new Word('word', 'asdfasdf', 'слово');

    setWord(word);
  };

  console.log('RENDER App');

  return (
    <Layout>
      <WordCard word={word} />
      <Button onClick={onButtonClick}>Кнопка</Button>
    </Layout>
  );
};

export { HomePage };
