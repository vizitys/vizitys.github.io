<script lang="ts">
  import { onMount } from "svelte";
  import projects, { type Project } from "../projects.ts";

  export let projectName: keyof typeof projects;

  export let isOpen = false;

  let project: Project;

  onMount(() => {
    project = projects[projectName];
  });

  function openModal() {
    isOpen = true;
  }

  function closeModal() {
    isOpen = false;
  }
</script>

{#if isOpen}
  <div class="modal" style="display: {isOpen ? 'block' : 'none'}">
    <div class="modal-content">
      <span class="close" on:click={closeModal}>&times;</span>
      <div>
        <img src={project.mainImage} alt={project.title} />
        <div>
          {#each project.galleryImages as image (image)}
            <img src={image} alt="Gallery" />
          {/each}
        </div>
      </div>
      <div>
        <h2>{project.title}</h2>
        <p>{project.longDescription}</p>
        {#each project.links as link (link)}
          <a href={link}>{link}</a>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style lang="postcss">
  .modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>
