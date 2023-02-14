<script lang="ts">
  import { jobModel } from "./stores";
  import FieldWrapper from "$lib/components/form/FieldWrapper.svelte";
  import DocNameCollisionField from "$lib/components/form/fields/DocNameCollisionField.svelte";
  import TwoColumnForm from "$lib/layouts/TwoColumnForm.svelte";
  import Title from "$lib/Title.svelte";
  import type PageConfigType from "./page-config-type";

  export let data: PageConfigType;
</script>

<Title title={data.title} />
<TwoColumnForm>
  <div slot="mainForm">
    <FieldWrapper bind:value={$jobModel.savedJob} field={data.savedJobField} />
    <FieldWrapper bind:value={$jobModel.serverImportDir} field={data.serverImportDirField} />
    <FieldWrapper bind:value={$jobModel.includeRoot} field={data.includeRootField} hideLabel={true} />
    <FieldWrapper bind:value={$jobModel.targetContainer} field={data.targetContainerField} />
    <FieldWrapper field={data.docNameCollisionField}>
      <DocNameCollisionField bind:docOption={$jobModel.docOption}
                             bind:docOptionAddVersion={$jobModel.docOptionAddVersion}
                             bind:docOptionAddVersionIfNewer={$jobModel.docOptionAddVersionIfNewer}
                             bind:docOptionAddVersionRadioVal={$jobModel.docOptionAddVersionRadioVal}
                             bind:docOptionUpdateMd={$jobModel.docOptionUpdateMd} />
    </FieldWrapper>
    <FieldWrapper bind:value={$jobModel.whenOption} field={data.whenField} />
  </div>
  <div slot="advancedForm">
    <FieldWrapper bind:value={$jobModel.defaultFileExtension} field={data.defaultFileExtensionField} />
    <FieldWrapper bind:value={$jobModel.logLevel} field={data.loggingLevelField} />
    <FieldWrapper bind:value={$jobModel.inheritParent} field={data.inheritParentField} showCheckboxLabel={false} />
    <FieldWrapper bind:value={$jobModel.checkRootPath} field={data.checkRootPathField} showCheckboxLabel={false} />
    <FieldWrapper bind:value={$jobModel.useFileCreateDate} field={data.useFileCreateDateField}
                  showCheckboxLabel={false} />
    <FieldWrapper bind:value={$jobModel.useFileModifyDate} field={data.useFileModifyDateField}
                  showCheckboxLabel={false} />
    <FieldWrapper bind:value={$jobModel.archiveImportedFiles} field={data.archiveImportedFilesField}
                  showCheckboxLabel={false} />
    <FieldWrapper bind:value={$jobModel.fileArchivePath} field={data.fileArchivePathField} hideLabel={true} />
  </div>
</TwoColumnForm>

<style lang="scss">
</style>
