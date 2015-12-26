<task-list>
  <ul>
    <li each={task in this.opts.tasks}>
      <input type="checkbox" id={task.id} checked={}/>
      {task.name}
    </li>
  </ul>
</task-list>
