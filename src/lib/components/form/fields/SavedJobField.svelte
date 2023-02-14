<script lang="ts">
  import DropdownField from "$lib/components/form/fields/DropdownField.svelte";
  import SavedJobFieldType from "$lib/types/fields/saved-job-field-type";
  import SvgIcon from "@jamescoyle/svelte-icon";
  import { mdiContentSave } from "@mdi/js";

  export let field: SavedJobFieldType;
  export let value: number;
</script>

<div class="control">
  <div class="select">
    <DropdownField bind:value={value} field={field} on:value-changed />
  </div>
</div>
<div class="control">
  <button class="button is-success">
      <span class="icon is-small">
        <SvgIcon path={mdiContentSave} type="mdi"></SvgIcon>
      </span>
    <span>Save</span>
  </button>
</div>

