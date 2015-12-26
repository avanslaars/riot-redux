<todo-app>

  <script>
    var actions = require('../actions.js')
    var store = this.opts.store

    store.subscribe(function(){
      this.state = store.getState()
      this.update()
    })
  </script>
</todo-app>
