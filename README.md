# isoden/explode

[![npm (scoped)](https://img.shields.io/npm/v/@isoden/explode.svg?style=flat-square)](https://github.com/isoden/explode)

## Installation

```
$ npm install @isoden/explode --save
```

## Usage

```js
import explode from '@isoden/explode';

explode('We 💓 TypeScript!');
  // => ['W', 'e', ' ', '💓', ' ', 'T', 'y', 'p', 'e', 'S', 'c', 'r', 'i', 'p', 't', '!']
```

## What's the difference between String.prototype.split('') ?

```js
explode('We 💓 TypeScript!');
  // => ['W', 'e', ' ', '💓', ' ', 'T', 'y', 'p', 'e', 'S', 'c', 'r', 'i', 'p', 't', '!']

'We 💓 TypeScript!'.split('');
  // => ["W", "e", " ", "�", "�", " ", "T", "y", "p", "e", "S", "c", "r", "i", "p", "t", "!"]
```

## License

Under The MIT License.
