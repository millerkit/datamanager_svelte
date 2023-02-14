<script lang="ts">
  import CheckboxFieldType from "$lib/types/fields/checkbox-field-type";
  import { formatArrayForClass } from "$lib/components/form/fields/fieldUtils.js";
  import FieldWrapper from "$lib/components/form/FieldWrapper.svelte";

  export let field: CheckboxFieldType;
  export let value: boolean;
  export let showLabel: boolean = true;
</script>

<label class={formatArrayForClass(field.optionLabelClasses)}>
  <input
    bind:checked={value}
    id={field.id}
    name={field.name}
    type="checkbox"
    value={field.value}
  >
  {#if showLabel}
    <span class="label-text">{field.labelBesideCheck}</span>
  {/if}
</label>
{#if field.helpBelowField}
  <p class="help">
    { field.helpBelowField }
  </p>
{/if}
{#if field.subFields}
  {#each field.subFields as subField (subField.id)}
    <FieldWrapper field={subField} />
  {/each}
{/if}

<style lang="scss">
  input {
    vertical-align: middle;
  }

  span.label-text {
    padding-left: 4px;
  }

  .small-label {
    font-size: 0.85rem;
  }

  .x-small-label {
    font-size: 0.8rem;
  }
</style>
