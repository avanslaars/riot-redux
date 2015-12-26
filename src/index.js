var riot = require('riot')
var redux = require('redux')


var reducer = function(state={title:'Default title'},action){
  console.log(action)
  switch(action.type){
    case 'CHANGE_TITLE':
      return Object.assign({},state,{title:action.data})
    default:
      return state
  }
}

var reduxStore = redux.createStore(reducer)

document.addEventListener('DOMContentLoaded', () => {
  riot.mount('*',{store:reduxStore})
})
