<!--suppress XmlInvalidId -->
<script lang="ts">
  import FieldType from "$lib/types/fields/fieldType";
  import { FieldComponentNameEnum } from "$lib/types/fields/field-component-name-enum";
  import TextInput from "$lib/components/form/fields/TextInput.svelte";
  import CheckboxField from "$lib/components/form/fields/CheckboxField.svelte";
  import CsNodeField from "$lib/components/form/fields/CsNodeField.svelte";
  import DropdownField from "$lib/components/form/fields/DropdownField.svelte";
  import RadioButtonField from "$lib/components/form/fields/RadioButtonField.svelte";
  import SavedJobField from "$lib/components/form/fields/SavedJobField.svelte";
  import ServerFilePathField from "$lib/components/form/fields/ServerFilePathField.svelte";
  import { formatArrayForClass } from "$lib/components/form/fields/fieldUtils.js";

  export let field: FieldType;

  export let value: any | null = null;

  export let hideLabel = false;

  export let showCheckboxLabel: boolean = true;

  export let show: boolean = true;

  function fieldIsAddOn(field: FieldType) {
    return field.componentName === FieldComponentNameEnum.ServerFilePathField ||
      field.componentName === FieldComponentNameEnum.CsNodeField ||
      field.componentName === FieldComponentNameEnum.SavedJobField;
  }
</script>

{#if show}
  <div class="{formatArrayForClass(field.fieldClasses)}">
    <div class="{formatArrayForClass(field.labelClasses)}">
      {#if !hideLabel}
        <label for={field.id}>{field.label}</label>
      {/if}
    </div>
    <div class="field-body">
      {#if field.componentName === FieldComponentNameEnum.TextField}
        <div class="field">
          <div class="control">
            <TextInput field={field} bind:value={value} />
          </div>
          {#if field.helpText}
            <p class="help">
              {field.helpText}
            </p>
          {/if}
        </div>
      {:else if field.componentName === FieldComponentNameEnum.CheckboxField}
        <div class="field">
          <div class="control is-expanded">
            <CheckboxField field={field} bind:value={value} showLabel={showCheckboxLabel} />
          </div>
          {#if field.helpText}
            <p class="help">
              {field.helpText}
            </p>
          {/if}
        </div>
      {:else if field.componentName === FieldComponentNameEnum.CsNodeField}
        <div class="field has-addons">
          <CsNodeField field={field} bind:value={value} />
        </div>
      {:else if field.componentName === FieldComponentNameEnum.DropdownField}
        <div class="field">
          <div class="control">
            <DropdownField field={field} bind:value={value} on:value-changed />
          </div>
          {#if field.helpText}
            <p class="help">
              {field.helpText}
            </p>
          {/if}
        </div>
      {:else if field.componentName === FieldComponentNameEnum.RadioButtonField}
        <div class="field">
          <div class="control">
            <RadioButtonField field={field} bind:value={value} />
          </div>
          {#if field.helpText}
            <p class="help">
              {field.helpText}
            </p>
          {/if}
        </div>
      {:else if field.componentName === FieldComponentNameEnum.SavedJobField}
        <div class="field has-addons">
          <SavedJobField field={field} bind:value={value} on:value-changed />
        </div>
      {:else if field.componentName === FieldComponentNameEnum.ServerFilePathField}
        <div class="field has-addons">
          <ServerFilePathField field={field} bind:value={value} />
        </div>
      {:else}
        <slot />
      {/if}
    </div>
  </div>
  {#if fieldIsAddOn(field) && field.helpText}
    <div class="field is-horizontal">
      <div class="field-label is-normal">&nbsp;
      </div>
      <div class="field-body">
        <div class="control">
          <p class="help">
            {field.helpText}
          </p>
        </div>
      </div>
    </div>
  {/if}
{/if}

<style lang="scss">
  .field-label {
    margin-right: 1rem;
  }

  @media screen and (min-width: 769px), print {
    .field-label {
      flex-grow: 2;
    }
  }

  .help {
    font-size: 0.8em;
  }

  .break {
    flex-basis: 100%;
    height: 0;
  }
</style>
