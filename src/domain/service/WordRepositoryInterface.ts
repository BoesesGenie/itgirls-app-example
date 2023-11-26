import Word from '../model/Word';

export interface WordRepositoryInterface {
  find(id: number): Word;
  save(word: Word): void;
}
