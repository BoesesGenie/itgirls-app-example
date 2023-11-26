import { WordRepositoryInterface } from './WordRepositoryInterface';
import Word from '../model/Word';

class LocalStorageWordRepository implements WordRepositoryInterface {
  find(id: number): Word {
    return new Word('', '', '');
  }

  save(word: Word): void {}
}

export { LocalStorageWordRepository };
