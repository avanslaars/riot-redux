module.exports = {
  loadTasks: loadTasks
}

function loadTasks(){
  return function(dispatch,getState){
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/tasks', true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText)
        dispatch(tasksLoaded(data))
      }
    }
    setTimeout(function(){
      request.send()
    }, 2000)

  }
}

function tasksLoaded(tasks){
  return {type:'TASKS_LOADED',data:tasks}
}

function toggleLoading(isLoading){
  return {type:'TOGGLE_LOADING', data: isLoading}
}
