<script lang="ts">
  import Accordion from "$lib/components/Accordion.svelte";
  import { WhenOptionEnum } from "$lib/types/enums/when-option-enum";

  export let whenOption = WhenOptionEnum;
</script>

<div>
  <div class="columns">
    <div class="column is-6">
      <slot name="mainForm" />
    </div>
    <div class="column is-6">
      <Accordion title="Advanced Settings">
        <slot name="advancedForm" />
      </Accordion>
      {#if whenOption === WhenOptionEnum.Scheduled}
        <div class="pt-4">
          <Accordion title="Scheduling">
            <slot name="scheduler" />
          </Accordion>
        </div>
      {/if}
    </div>
  </div>
</div>
