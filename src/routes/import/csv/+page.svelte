<script lang="ts">
  import { jobModel } from "./stores";
  import FieldWrapper from "$lib/components/form/FieldWrapper.svelte";
  import DocNameCollisionField from "$lib/components/form/fields/DocNameCollisionField.svelte";
  import TwoColumnForm from "$lib/layouts/TwoColumnForm.svelte";
  import Title from "$lib/Title.svelte";
  import type PageConfigType from "./page-config-type";
  import { onMount } from "svelte";
  import { getImportCsvPageConfig } from "$lib/api";
  import OptionTypeInteger from "$lib/types/fields/option-type-integer";
  import ContainerNameCollisionField from "$lib/components/form/fields/ContainerNameCollisionField.svelte";
  import Scheduler from "$lib/components/form/scheduler/Scheduler.svelte";
  import type { ImportCsvJobModel } from "$lib/models/import/import-csv-job-model";
  import { convertServerJobToImportCsvModel } from "$lib/models/import/apiConverter";

  export let data: PageConfigType;

  const jobMap: { [key: number]: ImportCsvJobModel; } = {};

  onMount(async () => {
    await getImportCsvPageConfig().then(json => {
      const options: Array<OptionTypeInteger> = [new OptionTypeInteger("0", "", 0)];
      for (const savedCsvJob of json.savedJobs) {
        jobMap[savedCsvJob.jobId] = savedCsvJob;
        const strID = savedCsvJob.jobId.toString();
        options.push(
          new OptionTypeInteger(strID, savedCsvJob.jobName, savedCsvJob.jobId, null)
        );
      }
      data.savedJobField.options = options;
    });
  });

  const setSavedValues = () => {
    const id = $jobModel.savedJob;
    $jobModel = convertServerJobToImportCsvModel(jobMap[id]);
  };
</script>

<Title title={data.title} />
<TwoColumnForm bind:whenOption={$jobModel.whenOption}>
  <div slot="mainForm">
    <FieldWrapper bind:value={$jobModel.savedJob} field={data.savedJobField} on:value-changed={setSavedValues} />
    <FieldWrapper bind:value={$jobModel.rootSourcePath} field={data.csvFilePathField} />
    <FieldWrapper bind:value={$jobModel.action} field={data.actionField} />
    <FieldWrapper bind:value={$jobModel.rootTargetPath} field={data.targetContainerField} />

    {#if data.docNameCollisionField.displayForActions.includes($jobModel.action)}
      <FieldWrapper field={data.docNameCollisionField}>
        <DocNameCollisionField bind:docOption={$jobModel.docOption}
                               bind:docOptionAddVersion={$jobModel.docOptionAddVersion}
                               bind:docOptionAddVersionIfNewer={$jobModel.docOptionAddVersionIfNewer}
                               bind:docOptionUpdateMd={$jobModel.docOptionUpdateMd}
                               bind:docOptionAddVersionRadioVal={$jobModel.docOptionAddVersionRadioVal} />
      </FieldWrapper>
    {/if}
    {#if data.containerNameCollisionField.displayForActions.includes($jobModel.action)}
      <FieldWrapper field={data.containerNameCollisionField}>
        <ContainerNameCollisionField bind:containerOption={$jobModel.containerOption} />
      </FieldWrapper>
    {/if}
    <FieldWrapper bind:value={$jobModel.whenOption} field={data.whenField} />
  </div>
  <div slot="advancedForm">
    <FieldWrapper bind:value={$jobModel.targetPathMeaning} field={data.targetPathMeaningField} />
    <FieldWrapper bind:value={$jobModel.logLevel} field={data.loggingLevelField} />
    <FieldWrapper bind:value={$jobModel.archiveCsvFiles} field={data.archiveCsvFilesField}
                  showCheckboxLabel={false} />
    <FieldWrapper bind:value={$jobModel.csvArchivePath} field={data.csvArchivePathField}
                  hideLabel={true} />

    {#if data.defaultFileExtensionField.displayForActions.includes($jobModel.action)}
      <FieldWrapper bind:value={$jobModel.defaultFileExtension} field={data.defaultFileExtensionField} />
    {/if}

    {#if data.rootFileLocField.displayForActions.includes($jobModel.action)}
      <FieldWrapper bind:value={$jobModel.rootFileLoc} field={data.rootFileLocField} />
    {/if}

    {#if data.autoCreateFoldersField.displayForActions.includes($jobModel.action)}
      <FieldWrapper bind:value={$jobModel.autoCreateFolders} field={data.autoCreateFoldersField} />
    {/if}

    {#if data.containerTypeField.displayForActions.includes($jobModel.action)}
      <FieldWrapper bind:value={$jobModel.containerType} field={data.containerTypeField} />
    {/if}

    {#if data.inheritParentField.displayForActions.includes($jobModel.action)}
      <FieldWrapper bind:value={$jobModel.inheritParent} field={data.inheritParentField} showCheckboxLabel={false} />
    {/if}

    {#if data.checkRootPathField.displayForActions.includes($jobModel.action)}
      <FieldWrapper bind:value={$jobModel.checkRootPath} field={data.checkRootPathField} showCheckboxLabel={false} />
    {/if}

    {#if data.useFileCreateDateField.displayForActions.includes($jobModel.action)}
      <FieldWrapper bind:value={$jobModel.useFileCreateDate} field={data.useFileCreateDateField}
                    showCheckboxLabel={false} />
    {/if}

    {#if data.useFileModifyDateField.displayForActions.includes($jobModel.action)}
      <FieldWrapper bind:value={$jobModel.useFileModifyDate} field={data.useFileModifyDateField}
                    showCheckboxLabel={false} />
    {/if}

    {#if data.archiveImportedFilesField.displayForActions.includes($jobModel.action)}
      <FieldWrapper bind:value={$jobModel.archiveImportedFiles} field={data.archiveImportedFilesField}
                    showCheckboxLabel={false} />
    {/if}

    {#if data.fileArchivePathField.displayForActions.includes($jobModel.action)}
      <FieldWrapper bind:value={$jobModel.fileArchivePath} field={data.fileArchivePathField} hideLabel={true} />
    {/if}

    {#if data.rmClassInheritField.displayForActions.includes($jobModel.action)}
      <FieldWrapper bind:value={$jobModel.rmClassInherit} field={data.rmClassInheritField}
                    showCheckboxLabel="{false}" />
    {/if}

    {#if data.forcePermInheritField.displayForActions.includes($jobModel.action)}
      <FieldWrapper bind:value={$jobModel.forcePermInherit} field={data.forcePermInheritField}
                    showCheckboxLabel="{false}" />
    {/if}
  </div>
  <div slot="scheduler">
    <Scheduler bind:jobModel={$jobModel} />
  </div>
</TwoColumnForm>
