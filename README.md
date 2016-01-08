# Installation
```
npm install angle-to-direction
```

# Usage
```
var a2d = require('angle-to-direction');

a2d.degree(50); // "North East"
a2d.degreeAbbr(50); // "NE"

a2d.radian(50 / 180 * Math.PI); // "North East"
a2d.radianAbbr(50 / 180 * Math.PI); // "NE"
```