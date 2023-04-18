// File: merge.test.ts

import { merge } from './merge';

// Unit test for the merge function
describe('merge', () => {
  it('should merge two sorted arrays', () => {
    const collection_1 = [1, 3, 5, 7, 9];
    const collection_2 = [2, 4, 6, 8, 10];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const result = merge(collection_1, collection_2);

    expect(result).toEqual(expected);
  });
});
