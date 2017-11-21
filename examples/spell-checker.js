const HashTable = require('../src/hash');

module.exports = class SpellChecker {
  constructor() {
    this.dictionary = new HashTable();
    this.loadDictionary([
      'Estamos', 'quase', 'na', 'hora',
      'de', 'acabar', 'a', 'aula',
      'e', 'ainda', 'tem', 'coisa',
      'para', 'falar',
    ]);
  }

  loadDictionary(words = []) {
    words.forEach(word => this.dictionary.set(word.toLowerCase()));
  }

  check(text, separator = ' ') {
    const words = text.toLowerCase().split(separator);
    const wrongWords = {};

    words.forEach((word) => {
      if (!this.dictionary.contains(word)) {
        wrongWords[word] = true;
      }
    });

    return Object.keys(wrongWords);
  }
};
