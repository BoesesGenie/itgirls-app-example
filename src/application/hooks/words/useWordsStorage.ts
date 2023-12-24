import { useCallback, useState } from 'react';
import Word from '../../../domain/model/Word';
import { WordsAction, WordsActionType } from './actions';

export const useWordsStorage = () => {
  const [word, setWord] = useState<Word | null>(
    new Word('слово', '[asdfasd]', 'asdfasdf'),
  );

  const dispatch = useCallback((action: WordsAction) => {
    switch (action.type) {
      case WordsActionType.UPDATE:
        setWord(action.payload);
        break;
      case WordsActionType.DELETE:
        setWord(null);
        break;
      default:
        setWord(null);
        break;
    }
  }, []);

  return { word, dispatch };
};
