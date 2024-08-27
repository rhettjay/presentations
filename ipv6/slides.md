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

# The future has arrived IPV6

## Overview:
- What is an IP Address?
  - What necessitates a version 6? What happened to version 5?
- What benefits does IPV6 offer over IPV4?
- Looking to the future
  - What can we expect the next 10 years to look like?
<br/>
<br/>
<footnote size="-4">
🚀 ☠️  🎮 "(1983) War Games - Starring Matthew Broderick: A young man finds a back door into a military central computer in which reality is confused with game-playing, possibly starting World War III."
</footnote>
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
