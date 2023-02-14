<script lang="ts">
  import ServerFilepathFieldType from "$lib/types/fields/server-filepath-field-type";
  import TextInput from "$lib/components/form/fields/TextInput.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import TreeView from "$lib/components/TreeView.svelte";

  export let value: string;
  export let field: ServerFilepathFieldType;

  let modalActive = false;

  const openModal = () => {
    modalActive = true;
  };

  const submit = () => {
    modalActive = false;
  };

  const cancel = () => {
    modalActive = false;
  };

  const tree = {
    label: "USA", children: [
      {
        label: "Florida", children: [
          { label: "Jacksonville" },
          {
            label: "Orlando", children: [
              { label: "Disney World" },
              { label: "Universal Studio" },
              { label: "Sea World" }
            ]
          },
          { label: "Miami" }
        ]
      },
      {
        label: "California", children: [
          { label: "San Francisco" },
          { label: "Los Angeles" },
          { label: "Sacramento" }
        ]
      }
    ]
  };

</script>

<div class="control is-expanded">
  <TextInput bind:value={value} field={field} placeholder={field.placeholder} readOnly={true} />
</div>
<div class="control">
  <a class="button is-info" href={'#'} on:click={openModal}>Select</a>
</div>

<Modal bind:isActive={modalActive}>
  <div slot="content">
    <TreeView {tree} />
  </div>
  <div slot="footer">
    <button class="button is-success" on:click={submit}>
      <slot name="success">Submit</slot>
    </button>
    <button class="button" on:click={cancel}>
      <slot name="cancel">Cancel</slot>
    </button>
  </div>
</Modal>

