<task-list>
  <ul>
    <li each={task in this.opts.tasks}>
      <input type="checkbox" id={task.id} checked={task.isComplete}
        onchange={handleCheck}/>
      {task.name}
    </li>
  </ul>

  <script>
    handleCheck(evt){
      this.opts.handlecheck()
    }
  </script>
</task-list>
