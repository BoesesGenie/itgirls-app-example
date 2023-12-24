import { WordsActionType } from '../words/actions';
import Word from '../../../domain/model/Word';
import { useCallback, useContext } from 'react';
import { WordsContext } from '../../context/WordsContext';

export const useWordUpdate = () => {
  const { dispatch } = useContext(WordsContext);

  return useCallback(
    () =>
      dispatch({
        type: WordsActionType.UPDATE,
        payload: new Word('обновить', 'asdfasdf', 'asdfasdf'),
      }),
    [dispatch],
  );
};
