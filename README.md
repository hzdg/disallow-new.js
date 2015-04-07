This is a simple utility for disallowing the use of "new" with certain
functions. It's especially useful for when you have a capitalized factory
function that you don't want people to use as a constructor (which would cause
an unnecessary object allocation but otherwise succeed without warning).


Installation
------------

`npm install disallownew`


Usage
-----

```javascript
import disallowNew from 'disallownew';

function MyFactory() {
  // [SNIP]
}

export default disallowNew(MyFactory);
```

Elsewhere:

```javascript
let a = new MyFactory(); // Errors!
```

```javascript
let a = MyFactory(); // All good.
```
