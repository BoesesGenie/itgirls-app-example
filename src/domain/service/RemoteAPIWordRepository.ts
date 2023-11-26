import { WordRepositoryInterface } from './WordRepositoryInterface';
import Word from '../model/Word';

class RemoteAPIWordRepository implements WordRepositoryInterface {
  find(id: number): Word {
    return new Word('', '', '');
  }

  save(word: Word): void {}
}

export { RemoteAPIWordRepository };
