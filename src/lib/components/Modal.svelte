<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";

  import Icon from "./Icon.svelte";

  import projects, { type Project } from "../projects.ts";

  export let projectName: keyof typeof projects;
  export let isOpen = false;
  let animate = false;

  let project: Project;
  let selectedImage: string;
  let intervalId: NodeJS.Timer;

  let allImages: string[];

  $: {
    project = projects[projectName];
    selectedImage = project.mainImage;
    allImages = [project.mainImage, ...project.galleryImages];
  }

  export function openModal() {
    isOpen = true;
    intervalId = setInterval(() => {
      const currentIndex = allImages.indexOf(selectedImage);
      const nextIndex = (currentIndex + 1) % allImages.length;
      selectedImage = allImages[nextIndex];
    }, 5000);
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key == "Escape") {
      closeModal();
    }
  }

  function closeModal() {
    isOpen = false;
    clearInterval(intervalId);
  }

  function selectImage(image: string) {
    selectedImage = image;
  }
</script>

<div
  class="modal justify-center items-center"
  style="display: {isOpen ? 'flex' : 'none'}"
  on:click={closeModal}
  on:keydown={handleKeydown}
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="modal-content bg-background-darker z-10 mt-24"
    on:click|stopPropagation
  >
    <span class="close" on:click={closeModal}>&times;</span>
    <div class="modal-inner flex">
      <div class="max-h-full max-w-2xl">
        <div class="image-container overflow-hidden">
          <a href={selectedImage} target="_blank" rel="noreferrer">
            <img
              src={selectedImage}
              alt={project.title}
              class="w-full h-auto aspect-video object-contain"
            />
          </a>
        </div>
        <div class="scrollable-gallery pt-4">
          {#each allImages as image}
            <img
              src={image}
              alt="Gallery"
              class="cursor-pointer max-h-32 max-w-sm mr-2"
              on:click={() => selectImage(image)}
            />
          {/each}
        </div>
      </div>
      <div class="p-5 max-w-3xl">
        <h2>{project.title}</h2>
        <div class="mt-2 mb-6 [&>p]:my-2 [&>*>a]:underline">
          <SvelteMarkdown source={project.longDescription} />
        </div>
        {#each project.links as link (link)}
          <div class="flex">
            <Icon name="link" class="w-6 h-6 fill-accent-2" />
            <a class="underline" href={link} target="_blank" rel="noreferrer"
              >{link}</a
            >
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

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

  .scrollable-gallery {
    display: flex;
    overflow-y: auto;
    white-space: nowrap;
  }
</style>
