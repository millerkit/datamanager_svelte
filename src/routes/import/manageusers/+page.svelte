<script lang="ts">
  import Title from "$lib/Title.svelte";
  import type PageConfigType from "./page-config-type";

  export let data: PageConfigType;
</script>

<Title title={data.title} />
