<script lang="ts">
  import RadioButtonFieldType from "$lib/types/fields/radio-button-field-type";
  import { formatArrayForClass } from "$lib/components/form/fields/fieldUtils.js";

  export let field: RadioButtonFieldType;
  export let value: string;
</script>

{#each field.options as option (option.id)}
  <label class={formatArrayForClass(field.optionLabelClasses)} for={option.id}>
    <input
      bind:group={value}
      id={option.id}
      name={field.name}
      type="radio"
      value={option.value}
    >
    { option.label }
  </label>
  {#if option.helpBelowField}
    <p class="help">
      { option.helpBelowField }
    </p>
  {/if}
{/each}

<style lang="scss">
  label {
    vertical-align: bottom;
    padding-top: 6px;
  }

  .small-label {
    font-size: 0.85rem;
  }

  .x-small-label {
    font-size: 0.8rem;
  }
</style>

