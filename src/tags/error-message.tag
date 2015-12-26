<error-message>
  <div show={this.opts.iserror}>
    {this.opts.message} <a href="#" onclick={hideMessage}>x</a>
  </div>
  <script>
    hideMessage(){
      this.opts.hide()
    }
  </script>
</error-message>
