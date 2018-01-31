var hsl = require('./')
var clockface = require('clockface');
var hue = 133
var saturation = 40
var luminosity = 60
var hex = hsl(hue, saturation, luminosity)
console.log(hex) // #70c282
console.dir(clockface)
