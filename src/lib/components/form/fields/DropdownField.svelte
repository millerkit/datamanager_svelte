<script lang="ts">
  import DropdownFieldType from "$lib/types/fields/dropdown-field-type";
  import { formatArrayForClass } from "$lib/components/form/fields/fieldUtils.js";
  import { createEventDispatcher } from "svelte";

  export let field: DropdownFieldType;
  export let value: string;

  const dispatch = createEventDispatcher();

  function valueChanged() {
    dispatch("value-changed", {});
  }

</script>

<div class="select">
  <select bind:value={value} class={formatArrayForClass(field.inputClasses)} on:change={valueChanged}>
    {#each field.options as option (option.id)}
      <option id={option.id} value={option.value}>{option.label}</option>
    {/each}
  </select>
</div>

