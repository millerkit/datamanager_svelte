<script lang="ts">
  import { formatArrayForClass } from "$lib/components/form/fields/fieldUtils.js";
  import FieldType from "$lib/types/fields/fieldType";

  export let field: FieldType;
  export let placeholder = "";
  export let value: string;
  export let readOnly = false;
</script>

<input bind:value={value} class={formatArrayForClass(field.inputClasses)} placeholder={placeholder}
       {readOnly} type="text">

<style lang="scss">
  input.is-half-width {
    width: 50%;
  }

  input.is-quarter-width {
    width: 25%;
  }
</style>
