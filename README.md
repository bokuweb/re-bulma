# ![ReBulma](https://github.com/bokuweb/re-bulma/blob/master/docs/logo.png?raw=true)

Bulma components build with react (based bulma(https://github.com/jgthms/bulma) v0.1.0)    
This repository is heavily under development and unstable.    

[![Version](https://img.shields.io/npm/v/re-bulma.svg?style=flat-square)](https://www.npmjs.com/package/re-bulma)
[![Code Climate](https://img.shields.io/codeclimate/github/bokuweb/re-bulma/badges/gpa.svg?style=flat-square)](https://codeclimate.com/github/bokuweb/re-bulma)
[![License](https://img.shields.io/npm/l/re-bulma.svg?style=flat-square)](https://github.com/bokuweb/re-bulma#license)

## Install

``` sh
npm i -S re-bulma
```

In your javascript pick up the css using 
``` sh
import insertCss from 'insert-css';
import css from '<path to yours or rebulmas>/build/css';
try {
  if (typeof document !== 'undefined' || document !== null) insertCss(css, { prepend: true });
} catch (e) {}
```

If you want to change the styles then do the following as well.
``` sh
npm install clean-css@3.4.18 --save-dev
npm install https://github.com/bokuweb/csjs.git --save-dev
npm install lodash.camelcase --save-dev

add the following to your Gruntfile.js or do similar for your build process
    shell: {
      buildReBulma: {
        command: 'node node_modules/re-bulma/scripts/transform.js
          ./re-bulma-variables.properties node_modules/re-bulma/src/styles/ build/ no'
      }
and include shell:buildReBulma in the grunt.registerTask('default'...) line

in the re-bulma-variables.properties specify the settings you require (see the 
re-bulma/default/re-bulma-variables.properties for reference)
```

## Development

``` sh
npm i
npm start
```

- styleguide server 

```
npm run styleguide-server
```

- build style

If you change src/styles/*.css, pelease rebuild styles.

```
npm run build:style
```


## Document

See http://bokuweb.github.io/re-bulma/, and please try to edit sample code.

### Components

#### Grid

- [x] Columns
- [x] Tile

#### Elements

- [x] Box
- [x] Button
- [x] Content
- [x] Form
- [x] Icon
- [x] Image
- [x] Notification
- [x] Progress 
- [x] Table
- [x] Tag
- [x] Titles

#### Components

- [x] Card
- [x] Level
- [x] Media object
- [x] Menu
- [x] Message
- [x] Modal
- [x] Nav
- [x] Pagination
- [x] Panel
- [x] Tabs

#### Layout

- [x] Container
- [x] Hero
- [x] Section
- [x] Footer


## License

The MIT License (MIT)

Copyright (c) 2016 @Bokuweb

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

