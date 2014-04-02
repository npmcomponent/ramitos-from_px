var type = require('component-type'),
    is_nan = require('KenanY-is-nan')

module.exports = function (px) {
  if(type(px) !== 'string') return 0
  var number = Number(px.replace(/px$/, ''))

  return is_nan(number) ? 0 : number
}