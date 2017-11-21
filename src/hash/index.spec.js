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

  it('resize()', () => {
    const hashTable = new HashTable();

    hashTable.set('paulo@example.com', 'Paulo');
    hashTable.set('joao@example.com', 'João');
    hashTable.set('neto@example.com', 'Neto');

    hashTable.resize();

    expect(hashTable.get('paulo@example.com')).toEqual('Paulo');
    expect(hashTable.get('joao@example.com')).toEqual('João');
    expect(hashTable.get('neto@example.com')).toEqual('Neto');
  });

  it('set 100.000 itens correctly', () => {
    const MIN = 1;
    const MAX = 100000;
    const hashTable = new HashTable();
    let i;

    for (i = MIN; i <= MAX; i += 1) {
      hashTable.set(i.toString(), i.toString());
    }

    for (i = MIN; i <= MAX; i += 1) {
      expect(hashTable.get(i.toString())).toEqual(i.toString());
    }

    expect(hashTable.storage.length).toEqual(1024);
    expect(hashTable.buckets).toEqual(MAX);
  });
});

