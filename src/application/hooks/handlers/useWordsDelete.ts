import { WordsActionType } from '../words/actions';
import Word from '../../../domain/model/Word';
import { useCallback, useContext } from 'react';
import { WordsContext } from '../../context/WordsContext';

export const useWordsDelete = () => {
  const { dispatch } = useContext(WordsContext);

  return useCallback(
    (word: Word) =>
      dispatch({
        type: WordsActionType.DELETE,
        payload: word,
      }),
    [dispatch],
  );
};
