
'use strict';

var assert  = require('assert');
var explode = require('../lib/explode');

describe('explode', function () {
  it('文字列分割ができる', function () {
    assert.deepEqual(explode('A String.'), ['A', ' ', 'S', 't', 'r', 'i', 'n', 'g', '.']);
  });

  it('絵文字にも対応している', function () {
    assert.deepEqual(explode('A 🙏 String.'), ['A', ' ', '🙏', ' ', 'S', 't', 'r', 'i', 'n', 'g', '.']);
  });
});
