import React, { FC } from 'react';
import { WordCard } from '../../components/WordCard';
import { Layout } from '../../components/Layout';
import { WordsContext } from '../../../application/context/WordsContext';
import { useWordsStorage } from '../../../application/hooks/words/useWordsStorage';
import { ButtonDelete } from './components/ButtonDelete';
import { ButtonUpdate } from './components/ButtonUpdate';

const HomePage: FC = () => {
  const state = useWordsStorage();

  return (
    <Layout>
      <WordsContext.Provider value={state}>
        <WordCard />
        <ButtonDelete />
        <ButtonUpdate />
      </WordsContext.Provider>
    </Layout>
  );
};

export { HomePage };
