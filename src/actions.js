module.exports = {

}

function loadTasks(){
  return function(dispatch,getState){
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/tasks', true);
    request.onload = function() {

    }
    request.send()
  }
}
