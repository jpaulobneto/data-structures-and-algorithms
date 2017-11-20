const HashTable = require('.');

describe('HashTable', () => {
  it('must be instantiated', () => {
    expect(() => new HashTable()).not.toThrow();
  });

  it('set()', () => {
    const hashTable = new HashTable();

    hashTable.set('paulo@example.com', 'Paulo');
    hashTable.set('joao@example.com', 'João');
    hashTable.set('neto@example.com', 'Neto');

    expect(hashTable.buckets).toEqual(3);
  });

  it('get(key)', () => {
    const hashTable = new HashTable();

    hashTable.set('paulo@example.com', 'Paulo');
    hashTable.set('joao@example.com', 'João');
    hashTable.set('neto@example.com', 'Neto');

    expect(hashTable.get('paulo@example.com')).toEqual('Paulo');
    expect(hashTable.get('joao@example.com')).toEqual('João');
    expect(hashTable.get('neto@example.com')).toEqual('Neto');
  });
});

