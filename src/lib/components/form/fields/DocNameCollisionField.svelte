<script lang="ts">
  import Accordion from "$lib/components/Accordion.svelte";
  import RadioButtonFieldType from "$lib/types/fields/radio-button-field-type";
  import OptionType from "$lib/types/fields/option-type";
  import CheckboxFieldType from "$lib/types/fields/checkbox-field-type";
  import RadioButtonField from "$lib/components/form/fields/RadioButtonField.svelte";
  import CheckboxField from "$lib/components/form/fields/CheckboxField.svelte";
  import { formatArrayForClass } from "$lib/components/form/fields/fieldUtils.js";
  import { DocOptionAddVersionEnum } from "$lib/types/enums/doc-add-newer-enum";
  import { DocCollisionOptionsEnum } from "$lib/types/enums/doc-collision-options-enum";

  export let docOption: DocCollisionOptionsEnum;
  export let docOptionAddVersion: boolean;
  export let docOptionAddVersionIfNewer: boolean;
  export let docOptionUpdateMd: boolean;
  export let docOptionAddVersionRadioVal: DocOptionAddVersionEnum =
    docOptionAddVersion ? DocOptionAddVersionEnum.AddVersionAlways : DocOptionAddVersionEnum.DoNotAddVersion;

  if (docOptionAddVersionIfNewer) {
    docOptionAddVersionRadioVal = DocOptionAddVersionEnum.AddVersionOnlyIfNewer;
  }

  const mainField = new RadioButtonFieldType(
    "docOption",
    "docOption",
    "If Existing Documents have the Same Name",
    [
      new OptionType(
        "docOptionUpdate",
        "Update the existing document",
        DocCollisionOptionsEnum.Update
      ),
      new OptionType(
        "docOptionMakeUnique",
        "Append a unique integer to the end of the name",
        DocCollisionOptionsEnum.MakeUnique,
        "(e.g., MyDoc_1)"
      ),
      new OptionType(
        "docOptionDoNothing",
        "Do Nothing (Name conflict errors will be reported)",
        DocCollisionOptionsEnum.ReportErrors
      )
    ]
  );
  mainField.optionLabelClasses = ["radio", "small-label"];

  const updateMetadataCheckboxField = new CheckboxFieldType("docOptionUpdateMd", "Update All Metadata from CSV");
  updateMetadataCheckboxField.optionLabelClasses = ["checkbox", "small-label", "is-block", "pt-2"];

  const addVersionRadioField = new RadioButtonFieldType(
    "docOptionAddVersion",
    "docOptionAddVersion",
    "Add Version",
    [
      new OptionType(DocOptionAddVersionEnum.AddVersionAlways,
        "Add version",
        DocOptionAddVersionEnum.AddVersionAlways
      ),
      new OptionType(DocOptionAddVersionEnum.AddVersionOnlyIfNewer,
        "Add version if source file date is newer than current version",
        DocOptionAddVersionEnum.AddVersionOnlyIfNewer
      ),
      new OptionType(DocOptionAddVersionEnum.DoNotAddVersion,
        "Do not add version",
        DocOptionAddVersionEnum.DoNotAddVersion
      )
    ]
  );

  addVersionRadioField.optionLabelClasses = ["radio", "small-label", "is-inline"];

</script>

<Accordion>
  <div>
    <div class="has-text-weight-semibold">
      If Existing Documents have the Same Name
    </div>
    <div class="control">
      {#each mainField.options as option (option.id)}
        <div>
          <label class={formatArrayForClass(mainField.optionLabelClasses)} for={option.id}>
            <input
              bind:group={docOption}
              id={option.id}
              name={mainField.name}
              type="radio"
              value={option.value}
            >
            { option.label }
          </label>
          {#if option.id === 'docOptionUpdate'}
            <div class="pl-5">
              <RadioButtonField field={addVersionRadioField} bind:value={docOptionAddVersionRadioVal} />
              <CheckboxField field={updateMetadataCheckboxField} bind:value={docOptionUpdateMd} />
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</Accordion>

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
