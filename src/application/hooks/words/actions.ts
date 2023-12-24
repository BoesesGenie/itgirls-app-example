import Word from '../../../domain/model/Word';

export enum WordsActionType {
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

type WordsActionUpdate = {
  type: WordsActionType.UPDATE;
  payload: Word;
};

type WordsActionDelete = {
  type: WordsActionType.DELETE;
  payload: Word;
};

export type WordsAction = WordsActionUpdate | WordsActionDelete;
