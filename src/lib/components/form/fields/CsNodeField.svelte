<script lang="ts">
  import CsNodeFieldType from "$lib/types/fields/cs-node-field-type";
  import TextInput from "$lib/components/form/fields/TextInput.svelte";
  import Modal from "$lib/components/Modal.svelte";

  export let field: CsNodeFieldType;
  export let value: string;

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
</script>

<div class="control is-expanded">
  <TextInput bind:value={value} field={field} placeholder={field.placeholder} readOnly={true} />
</div>
<div class="control">
  <a class="button is-info" href={'#'} on:click={openModal}>Select</a>
</div>

<Modal bind:isActive={modalActive}>
  <div slot="content">Hello</div>
  <div slot="footer">
    <button class="button is-success" on:click={submit}>
      <slot name="success">Submit</slot>
    </button>
    <button class="button" on:click={cancel}>
      <slot name="cancel">Cancel</slot>
    </button>
  </div>
</Modal>






