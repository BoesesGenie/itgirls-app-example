import { WordRepositoryInterface } from './WordRepositoryInterface';

class WordFilter {
  constructor(private readonly wordRepository: WordRepositoryInterface) {}

  filerWords(ids: number[]) {
    return ids
      .map((id) => {
        return this.wordRepository.find(id);
      })
      .filter((word) => {
        return word.word.length === 4;
      });
  }
}
