<script>
  import gears from "$lib/images/gears.png";
  import synlogo from "$lib/images/synlogo-whispy.png";
</script>

<nav aria-label="main navigation" class="navbar header">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img alt="gears" class="gears" src={gears} />
    </a>
  </div>

  <div class="navbar-item app-name">
    Data Manager 22.4.0.0
  </div>

  <div class="navbar-end">
    <img
      alt="syntergy logo"
      class="synlogo"
      src={synlogo}
    />
  </div>
</nav>

<style>
    .header {
        color: #fff;
        text-transform: uppercase;
        text-shadow: 1px 1px 2px #000;
        min-height: 2.75rem;
        max-height: 3rem;
        vertical-align: center;
    }

    .navbar-item img {
        padding-bottom: 4px;
    }

    .app-name {
        padding-left: 18px;
        vertical-align: middle;
        color: white;
        text-decoration: none;
        font-size: 1.2rem;
    }

</style>
