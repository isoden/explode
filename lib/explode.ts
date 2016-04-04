/// <reference path="../typings/bundle.d.ts" />

'use strict';

import * as punycode from 'punycode';

export default function explode(input: string): string[] {
  if (typeof Array.from === 'function') {
    return Array.from<string>(input);
  } else {
    return punycode.ucs2.decode(input).map<string>(code => punycode.ucs2.encode([code]));
  }
}

module.exports = explode;
