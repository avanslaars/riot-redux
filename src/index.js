var riot = require('riot')
var redux = require('redux')
require('./tags/sample-output.tag')

var reducer = function(state={},action){
  return state
}

document.addEventListener('DOMContentLoaded', () => riot.mount('sample-output'))
