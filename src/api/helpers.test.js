import assert from 'assert';

import { buildQueryString } from './helpers';

describe('API helper functions', () => {
  describe('buildQueryString', () => {
    it('should convert an object to a query param string', () => {
      const params = {
        accessKey: '1234',
        searchTerm: 'dogs',
      };

      assert.deepEqual(buildQueryString(params), 'accessKey=1234&searchTerm=dogs');
    });
  });
});
