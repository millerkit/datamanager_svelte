<script lang="ts">
  export let isActive: boolean;

  const cancel = () => {
    isActive = false;
  };
</script>

<div class={isActive ? 'modal is-active' : 'modal'}>
  <div class="modal-background" on:click={cancel}>
  </div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">
        <slot name="title" />
      </p>
      <button aria-label="close" class="delete" on:click={cancel}></button>
    </header>
    <section class="modal-card-body">
      <slot name="content" />
    </section>
    <footer class="modal-card-foot">
      <slot name="footer" />
    </footer>
  </div>
</div>

<style lang="scss">
  .modal-card-foot {
    justify-content: flex-end;
  }
</style>



