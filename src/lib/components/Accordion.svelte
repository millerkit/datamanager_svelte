<script lang="ts">
  import SvgIcon from "@jamescoyle/svelte-icon";
  import { formatArrayForClass } from "$lib/components/form/fields/fieldUtils.js";
  import { mdiMenuDown } from "@mdi/js";

  let cardClasses = ["card-content", "is-hidden"];

  let isHidden = true;
  const toggleVisible = () => {
    if (isHidden) {
      cardClasses = ["card-content"];
      isHidden = false;
    } else {
      cardClasses = ["card-content", "is-hidden"];
      isHidden = true;
    }
  };

  export let title: string = "Options";
</script>

<div class="container is-fullwidth">
  <div class="card is-fullwidth">
    <header class="card-header">
      <p class="card-header-title" on:click={toggleVisible} on:keydown={{toggleVisible}}>{title}</p>
      <button aria-label="more options" class="card-header-icon" on:click={toggleVisible}>
        <span class="icon">
          <SvgIcon path={mdiMenuDown} type="mdi"></SvgIcon>
        </span>
      </button>
    </header>
    <div class={formatArrayForClass(cardClasses)}>
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .card-header-title {
    font-weight: normal;
    cursor: pointer;
  }
</style>
