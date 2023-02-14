<script lang="ts">
  import Accordion from "$lib/components/Accordion.svelte";
  import RadioButtonFieldType from "$lib/types/fields/radio-button-field-type";
  import OptionType from "$lib/types/fields/option-type";
  import { formatArrayForClass } from "$lib/components/form/fields/fieldUtils.js";
  import { ContainerCollisionOptionsEnum } from "$lib/types/enums/container-collision-options-enum";

  export let containerOption: ContainerCollisionOptionsEnum;

  const mainField = new RadioButtonFieldType(
    "containerOption",
    "containerOption",
    "If Existing Containers have the Same Name",
    [
      new OptionType(
        "containerOptionUpdate",
        "Update All Metadata from CSV",
        ContainerCollisionOptionsEnum.Update
      ),
      new OptionType(
        "containerOptionMakeUnique",
        "Append a unique integer to the end of the name",
        ContainerCollisionOptionsEnum.MakeUnique,
        "(e.g., MyFolder_1)"
      ),
      new OptionType(
        "containerOptionDoNothing",
        "Do Nothing (Name conflict errors will be reported)",
        ContainerCollisionOptionsEnum.ReportErrors
      )
    ]
  );
  mainField.optionLabelClasses = ["radio", "small-label"];

</script>

<Accordion>
  <div>
    <div class="has-text-weight-semibold">
      If Existing Containers have the Same Name
    </div>
    <div class="control">
      {#each mainField.options as option (option.id)}
        <div>
          <label class={formatArrayForClass(mainField.optionLabelClasses)} for={option.id}>
            <input
              bind:group={containerOption}
              id={option.id}
              name={mainField.name}
              type="radio"
              value={option.value}
            >
            { option.label }
          </label>
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
