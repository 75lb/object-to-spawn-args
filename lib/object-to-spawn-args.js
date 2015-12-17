'use strict'

/**
 * @module object-to-spawn-args
 */
module.exports = toSpawnArgs

function toSpawnArgs(object, options) {
  var output = []
  options = options || {}

  for (var prop in object) {
    var value = object[prop]
    if (value !== undefined) {
      var dash = prop.length === 1 ? '-' : '--'
      output.push(dash + prop)
      if (value !== true) {
        if (Array.isArray(value)) {
          value.forEach(function (item) {
            output.push(item)
          })
        } else {
          if (options.quote) {
            output.push('"' + value + '"')
          } else {
            output.push(value)
          }
        }
      }
    }
  }
  return output
}
