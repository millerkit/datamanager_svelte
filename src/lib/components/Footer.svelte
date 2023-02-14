<footer class="footer">
  <div class="columns">
    <div class="column is-4">
      <a href="/CS221/cs.exe?func=admin.index">Admin Index</a>
      <a class="content-server" href="/CS221/cs.exe">Enterprise Workspace</a>
    </div>
    <div class="column is-4">
      <div class="content has-text-centered">
        Copyright ©2023 by www.syntergy.com, Inc. All rights reserved.
      </div>
    </div>
    <div class="column is-4">
      <div class="content has-text-right">Data Manager 22.4.0.0 Jan 18, 2021</div>
    </div>
  </div>
</footer>


<style lang="scss">
  @use "../../styles/variables";

  .footer {
    padding: 1rem;
    background-color: variables.$footer-background-color;
    color: white;
    font-size: 0.8rem;

    a {
      line-height: 29px;
      vertical-align: middle;
      padding-right: 15px;
      color: #fff;
      text-decoration: none;

      :hover {
        color: #fff;
      }
    }
  }
</style>
