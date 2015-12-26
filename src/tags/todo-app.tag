<todo-app>

  <task-list tasks={this.state.tasks}></task-list>

  <script>
    var actions = require('../actions.js')
    var store = this.opts.store

    this.on('mount',function(){
      store.dispatch()
    })

    store.subscribe(function(){
      this.state = store.getState()
      this.update()
    }.bind(this))
  </script>
</todo-app>
