<script>
  import "../styles/styles.scss";
  import Header from "$lib/components/Header.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="app">
  <Header />
  <div class="section main_section">
    <div class="columns">
      <aside class="column is-narrow">
        <Sidebar />
      </aside>
      <main class="column">
        <slot />
      </main>
    </div>
  </div>
  <div class="section footer_section">
    <Footer />
  </div>
</div>


<style>
    .app {
        min-height: 100vh;
    }

    .main_section {
        padding: 1.2rem;
    }

    .footer_section {
        padding: 0;
    }

</style>
