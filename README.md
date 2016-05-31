# eslint-config-prototypers

iMinds Living Labs - prototyping team's [eslint](http://eslint.org/) configuration as an [extensible shared config](http://eslint.org/docs/developer-guide/shareable-configs).

## Installation

```sh
$ npm install -D eslint eslint-config-prototypers
```

## Usage

### Full preset

```js
//file: .eslintrc.js
module.exports = {
  extends: 'prototypers'
}
```
```sh
$ eslint my-file.js
```

### Partial presets
```js
//file: .eslintrc.js
module.exports = {
  extends: 'prototypers/rules/best-practices'
}
```
```sh
$ eslint my-file.js
```

See the [rules](./blob/master/rules) directory for possible values.

## License

[MIT License - Copyright (c) 2016 iMinds](./LICENSE.md)