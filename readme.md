*This repository is a mirror of the [component](http://component.io) module [ramitos/from_px](http://github.com/ramitos/from_px). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/ramitos-from_px`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# from_px

## install

```bash
component install ramitos/from_px
```

## api

```js
var from_px = require('from_px')

from_px('100px') //=> 100
from_px(null) //=> 0
from_px(undefined) //=> 0
from_px(NaN) //=> 0
from_px({}) //=> 0
```

## license

MIT