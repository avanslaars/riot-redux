var riot = require('riot')
var redux = require('redux')
var thunk = require('redux-thunk')

var reducer = function(state={tasks:[]},action){
  console.log(action)
  switch(action.type){
    case 'TASKS_LOADED':
      return Object.assign({},state,{tasks:action.data})
    default:
      return state
  }
}

// var reduxStore = redux.createStore(reducer)
var createStoreWithMiddleware = redux.compose(
  redux.applyMiddleware(thunk)
)(redux.createStore)

var reduxStore = createStoreWithMiddleware(reducer)

document.addEventListener('DOMContentLoaded', () => {
  riot.mount('*',{store:reduxStore})
})
