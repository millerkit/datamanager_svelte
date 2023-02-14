<script lang="ts">
  import { jobModel } from "./stores";
  import FieldWrapper from "$lib/components/form/FieldWrapper.svelte";
  import TwoColumnForm from "$lib/layouts/TwoColumnForm.svelte";
  import Title from "$lib/Title.svelte";
  import type PageConfigType from "./page-config-type";

  export let data: PageConfigType;
</script>

<Title title={data.title} />
<TwoColumnForm>
  <div slot="mainForm">
    <FieldWrapper bind:value={$jobModel.savedJob} field={data.savedJobField} />
    <FieldWrapper bind:value={$jobModel.whenOption} field={data.whenField} />
  </div>
  <div slot="advancedForm">
    <FieldWrapper bind:value={$jobModel.logLevel} field={data.loggingLevelField} />
  </div>
</TwoColumnForm>

<style lang="scss">
</style>
