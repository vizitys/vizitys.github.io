<script lang="ts">
  import Icon from "./Icon.svelte";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@600&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div
  class="flex fixed z-50 w-full justify-between bg-background items-center px-3 [&>*]:py-3"
>
  <h1 class="name">&lt Vinski Lång /&gt</h1>
  <div class="flex [&>*]:px-3">
    <a
      href="https://github.com/vizitys/vizitys.github.io"
      title="This website's source code"
      target="_blank"
      rel="noreferrer"><Icon name="github" class="fill-accent-3"></Icon></a
    >
    <a
      href="https://www.linkedin.com/in/vinski-lang/"
      title="LinkedIn"
      target="_blank"
      rel="noreferrer"><Icon name="linkedin" class="fill-accent-3"></Icon></a
    >
    <a href="/Vinski_Lång_CV.pdf" title="My CV" target="_blank"
      ><Icon name="file" class="fill-accent-3"></Icon></a
    >
  </div>
</div>

<style lang="postcss">
  .name {
    font-family: "Chivo Mono", monospace;
  }
</style>
