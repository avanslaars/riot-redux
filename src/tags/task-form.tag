<task-form>
  <form onsubmit={handleSubmit}>
    <input type="text" name="newTask"/>
    <input type="submit" name="submit" value="submit">
  </form>
  <script>
    handleSubmit(){
      this.opts.addtask(this.newTask.value)
      this.newTask.value = ''
    }
  </script>
</task-form>
