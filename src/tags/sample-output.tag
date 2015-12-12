<sample-output>
  <h1>{this.opts.store.getState().title}</h1>
  <form onsubmit={changeTitle}>
    <input type="text" name="newTitle">
  </form>
</sample-output>
