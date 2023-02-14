<script lang="ts">
  import type { ImportCsvJobModel } from "$lib/types/import/csv/import-csv-job-model";
  import FieldWrapper from "$lib/components/form/FieldWrapper.svelte";
  import { jobNameField } from "$lib/components/form/scheduler/fields.js";

  export let jobModel: ImportCsvJobModel;
</script>

<div>
  <FieldWrapper bind:value={jobModel.jobName} field={jobNameField} />
</div>
