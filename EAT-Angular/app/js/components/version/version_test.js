'use strict';

describe('EAT.version module', function() {
  beforeEach(module('EAT.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
