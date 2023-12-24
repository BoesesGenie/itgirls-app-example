import { createContext } from 'react';
import { useWordsStorage } from '../hooks/words/useWordsStorage';
import { WordsAction } from '../hooks/words/actions';

const DEFAULT_VALUE = {
  word: null,
  dispatch: (action: WordsAction) => {
    return;
  },
};

export const WordsContext =
  createContext<ReturnType<typeof useWordsStorage>>(DEFAULT_VALUE);
