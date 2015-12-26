var riot = require('riot')
var redux = require('redux')
var thunk = require('redux-thunk')

var reducer = function(state={title:'Default title'},action){
  console.log(action)
  switch(action.type){

    default:
      return state
  }
}

// var reduxStore = redux.createStore(reducer)

document.addEventListener('DOMContentLoaded', () => {
  riot.mount('*',{store:reduxStore})
})
