const SpellChecker = require('../spell-checker');

describe('SpellChecker', () => {
  it('can be initialized', () => {
    expect(() => new SpellChecker()).not.toThrow();
  });

  it('loadDictionary()', () => {
    const spell = new SpellChecker();
    const words = ['a', 'e', 'I', 'O', 'u'];

    spell.loadDictionary(words);

    words.forEach(word => expect(spell.dictionary.contains(word.toLowerCase())));
  });

  it('check(text)', () => {
    const spell = new SpellChecker();
    const text = 'Estamos quase na hora de acabar a aula e ainda tem coisa pra caramba pra fala';
    const expected = ['pra', 'caramba', 'fala'];

    expect(spell.check(text)).toEqual(expected);
  });
});
