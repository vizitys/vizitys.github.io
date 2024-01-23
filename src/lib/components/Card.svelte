<script lang="ts">
  import { icons } from "$lib/icons.ts";
  import projects from "../projects.ts";

  export let projectName: keyof typeof projects;

  let project = projects[projectName];

  $: console.log(project);
</script>

<div class="card">
  <div class="card-picture">
    <img src={project.mainImage} alt={project.title} />
  </div>
  <div class="card-content bg-background-darker">
    <h2 class="card-title">{project.title}</h2>
    <p class="card-description">{project.shortDescription}</p>
  </div>
</div>

<style lang="postcss">
  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--color-accent-1);
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0 0.5rem 0.25rem var(--color-accent-1);
    max-width: 300px; /* specify the width */
    max-height: 400px; /* specify the height */
    position: relative;
  }

  .card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, transparent, rgba(0, 0, 0, 0.5));
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .card:hover {
    box-shadow: 0 0 1rem 0.3rem rgba(0, 0, 0, 0.2);
  }

  .card:hover::before {
    opacity: 0.5;
  }

  .card-picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  .card:hover .card-picture img {
    transform: scale(1.1);
  }

  .card-picture {
    width: 100%;
    height: 10rem;
    overflow: hidden;
  }

  .card-picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-content {
    padding: 1rem;
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
  }

  .card-description {
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
  }
</style>
