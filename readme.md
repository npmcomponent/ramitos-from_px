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