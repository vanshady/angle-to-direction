# Installation
```
npm install angle-to-direction -S
```

# Usage
```
var a2d = require('angle-to-direction');

console.log(a2d.degree(50)); // "North East"
console.log(a2d.degreeAbbr(50)); // "NE"
 
console.log(a2d.radian(50 / 180 * Math.PI)); // "North East"
console.log(a2d.radianAbbr(50 / 180 * Math.PI)); // "NE"
```