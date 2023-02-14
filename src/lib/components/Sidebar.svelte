<nav class="menu">
  <p class="menu-label">
    General
  </p>
  <ul class="menu-list">
    <li id="general-about"><a href="general/about">About Data Manager</a>
    </li>
    <li id="general-support">
      <a href="general/support">Email support</a>
    </li>
  </ul>

  <p class="menu-label">
    Importing
  </p>
  <ul class="menu-list">
    <li><a href="/import/files">Import Files</a></li>
    <li><a href="/import/csv">Import from CSV</a></li>
    <li><a href="/import/users">Import Users</a></li>
    <li><a href="/import/groups">Import Groups</a></li>
    <li><a href="/import/managepaths">Manage Import Paths</a></li>
    <li><a href="/import/manageusers">Manage Import Users</a></li>
    <li><a href="/import/savedjobs">Saved Jobs</a></li>
    <li><a href="/import/scheduler">Scheduler</a></li>
  </ul>

  <p class="menu-label">
    Exporting
  </p>
  <ul class="menu-list">
    <li><a href="/export/objects">Export Files</a></li>
    <li><a href="/export/metadata">Export Metadata Only</a></li>
    <li><a href="/export/users">Export Users/Groups</a></li>
    <li><a href="/export/managepaths">Manage Export Paths</a></li>
    <li><a href="/export/manageusers">Manage Export Users</a></li>
    <li><a href="/export/savedjobs">Saved Jobs</a></li>
    <li><a href="/export/scheduler">Scheduler</a></li>
  </ul>

  <p class="menu-label">
    Content Server
  </p>
  <ul class="menu-list">
    <li><a href="/CS221/cs.exe?func=admin.index">Admin Index</a></li>
    <li><a class="content-server" href="/CS221/cs.exe">Enterprise Workspace</a></li>
  </ul>
</nav>

<style lang="scss">
  @use "../../styles/variables";

  .menu {
    border-radius: 7px;
    color: #005580;
    //background-image: -webkit-linear-gradient(top, #fff, #c8d0d5);
    border: 1px solid #005580;
    box-shadow: 1px 1px 2px #005580;
    padding: 16px;
  }

  .menu-list a {
    color: variables.$syntergy_dark_blue;
  }

</style>
