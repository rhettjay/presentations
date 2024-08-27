---
theme: the-unnamed
layout: cover
background: text-center
highlighter: shikiji
lineNumbers: true
transition: slide-left
title: ESM - CJS
mdc: true
---

# NASAs 10 Rules for Space Proof Code
> As told by Gerard Holzmann of IPL
## Express Goal: Testability, Readability, Reliability
- [ ] Restrict all code to very simple control flow constructs—do not use goto statements, setjmp or longjmp constructs, or direct or indirect recursion.
- [ ] Give all loops a fixed upper bound.
- [ ] Do not use dynamic memory allocation after initialization.
- [ ] No function should be longer than what can be printed on a single sheet of paper in a standard format with one line per statement and one line per declaration.
- [ ] The code's assertion density should average to minimally two assertions per function.
- [ ] Declare all data objects at the smallest possible level of scope.
- [ ] Each calling function must check the return value of nonvoid functions, and each called function must check the validity of all parameters provided by the caller.
- [ ] The use of the preprocessor must be limited to the inclusion of header files and simple macro definitions.
- [ ] Limit pointer use to a single dereference, and do not use function pointers.
- [ ] Compile with all possible warnings active; all warnings should then be addressed before the release of the software.

---
layout: default
---
```html
<!DOCTYPE html>
<html>
  <body>
    <form id="myForm" onsubmit="submitHandler(event)">
      <label for="inputField">Input:</label>
      <input type="text" id="inputField" name="inputField" />

      <button
        id="myButton"
        class="btn"
        name="actionButton"
        value="clickValue"
        type="button"
        title="Click this button"
        style="background-color: blue; color: white"
      >
        Click Me
      </button>
    </form>

    <script>
      function submitHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        alert(formData.get("inputField"));
      }
    </script>
  </body>
</html>
```

<br/>

---
layout: default
---
```html
<!DOCTYPE html>
<html>
  <body>
    <form id="myForm" onsubmit="submitHandler(event)">
      <label for="inputField">Input:</label>
      <input type="text" id="inputField" name="inputField" />

      <button
        id="myButton"
        class="btn"
        name="actionButton"
        value="clickValue"
        type="submit"
        title="Click this button"
        style="background-color: blue; color: white"
      >
        Click Me
      </button>
    </form>

    <script>
      function submitHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        alert(formData.get("inputField"));
      }
    </script>
  </body>
</html>
```

<br/>

---
layout: about-me

helloMsg: Who am I?
name: "Rhett Bulkley"
imageSrc: "./assets/profile_family.jpeg"
job: "mediocre software developer -"
line1: "oss maintainer @standardjs -"
line2: "father of 3 -"

---
---
layout: cover
---
# What is an IP Address?

[An Ipaddress](./assets/ip_address.jpeg)
```sh
```
---

# Why do we need version 6?
> Wait... what happened to version 5?

---
---
# What 
```js
// module.js
'use strict';
exports.a = 'a';
exports.b = 'b';
exports.c = 'c';

module.exports = Object.assign(cjsModule,{
  default: a,
  b,
  c
})
// index.js
const cjsModule = require('./module');
cjsModule.a = 'z';
console.log(cjsModule);
// {a: 'z', b: 'b', c: 'c'}
```
---
---
## ESM
```js
// module.js
export let a = 'a';
export let b = 'b';
export let c = 'c';
// index.js
import * as esmModule from './module.js';
esmModule.a = 'z';
console.log(esmModule);

// result:
esmModule.a = 'z';
            ^
TypeError: Cannot assign to read only property 'a' of object '[object Module]'
```
---
## ESM vs CJS
Discussion
---
