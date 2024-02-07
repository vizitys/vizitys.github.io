<script lang="ts">
  import { onMount } from "svelte";

  import Card from "$lib/components/Card.svelte";
  import Icon from "$lib/components/Icon.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import GraphemeSplitter from "grapheme-splitter";

  import type projects from "$lib/projects";

  // scroll container
  let scrollWrapper: HTMLDivElement;
  let scrollContainers: HTMLElement[] = [];

  let modal: Modal;

  const projectsToBeImported: (keyof typeof projects)[] = [
    "oispahalla",
    "junction2022",
    "junctionNexus",
    "junction2023",
    "hallacoin",
  ];

  let currentProject: keyof typeof projects = projectsToBeImported[0];

  function openModal(projectName: keyof typeof projects) {
    currentProject = projectName;
    modal.openModal();
  }

  // dumb solution for dumb unicode problem aka emojis being more than one character
  const splitter = new GraphemeSplitter();

  const nameGoal = "Vinski Lång";
  const descriptionGoal =
    "Information Technology Student at Aalto University 🛠️";

  let name = "";
  let description = "";

  splitter.splitGraphemes(nameGoal).forEach((char, i) => {
    setTimeout(() => {
      name += char;
    }, 100 * i);
  });

  setTimeout(
    () => {
      splitter.splitGraphemes(descriptionGoal).forEach((char, i) => {
        setTimeout(() => {
          description += char;
        }, 100 * i);
      });
    },
    100 * splitter.countGraphemes(name) + 2000,
  );

  onMount(() => {
    scrollWrapper.addEventListener("wheel", (event) => {
      event.preventDefault();
      const delta = event.deltaY;

      scrollWrapper.scrollBy({
        top: delta,
        behavior: "smooth",
      });
    });
  });
</script>

<main>
  <Modal projectName={currentProject} bind:this={modal} />
  <div id="scroll-wrapper" bind:this={scrollWrapper}>
    <section
      id="1"
      class="site-section bg-background"
      bind:this={scrollContainers[scrollContainers.length]}
    >
      <div class="mt-36 items-center flex flex-col h-full justify-around">
        <div class="pic-wrapper">
          <div class="title-container m-52">
            <h1 class="me">{name}</h1>
            <p class="description w-80 h-12">{description}</p>
            <div class="cv-link flex justify-center mt-4">
              <a
                href="/Vinski_Lång_CV.pdf"
                target="_blank"
                class="bg-accent-3 text-background p-3 rounded-md"
              >
                <span>View My CV</span>
              </a>
            </div>
          </div>
          <img
            src="/me.jpg"
            alt="Profile of Vinski Lång"
            class="profile-pic rounded-full"
          />
        </div>
        <Icon name="down" class="down-arrow bounce fill-accent-3 w-16 h-16" />
      </div>
    </section>
    <section
      id="2"
      class="site-section bg-accent-1 [&>*]:py-3"
      bind:this={scrollContainers[scrollContainers.length]}
    >
      <h2>Projects</h2>
      <p>
        Despite being a beginner in my studies, I have lots of experience under
        my belt via various projects I have done in my free time.
      </p>
      <div class="projects flex justify-around w-10/12">
        {#each projectsToBeImported as project}
          <button on:click={() => openModal(project)}>
            <Card projectName={project} />
          </button>
        {/each}
      </div>
    </section>
    <!-- <section
      id="3"
      class="site-section bg-accent-2"
      bind:this={scrollContainers[scrollContainers.length]}
    >
      mömmömmöö
    </section>
    <section
      id="4"
      class="site-section bg-accent-3"
      bind:this={scrollContainers[scrollContainers.length]}
    >
      mömmömmöö
    </section> -->
  </div>
</main>

<style lang="postcss">
  /* *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  } */

  #scroll-wrapper {
    width: 100vw;
    height: 100vh;
    transition: all 1.5s ease;

    scroll-snap-type: y mandatory;
    scroll-snap-stop: always;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }

  .site-section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    height: 100%;
    width: 100%;
    border: 1px solid black;
    border-bottom: 1px;

    scroll-snap-align: start;
  }

  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  .pic-wrapper {
    display: flex;
    flex-direction: row-reverse;

    width: 100%;

    justify-content: center;
    align-items: center;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    animation: move-text 2s 3s forwards cubic-bezier(0.32, 0.08, 0.43, 0.99);

    margin-left: -30%;
    margin-right: 0;
  }

  .profile-pic {
    animation: fade-in 2s 4s forwards cubic-bezier(0.32, 0.08, 0.43, 0.99);
    opacity: 0;
    width: 25%;
  }

  .cv-link {
    animation: fade-in 2s 7.5s forwards cubic-bezier(0.32, 0.08, 0.43, 0.99);
    opacity: 0;
  }

  /* has to be global because of the way svelte handles classes */
  :global(.down-arrow) {
    animation:
      fade-in 2s 4s forwards cubic-bezier(0.32, 0.08, 0.43, 0.99),
      bounce 2s ease infinite;
    opacity: 0;
  }

  @keyframes bounce {
    70% {
      transform: translateY(0%);
    }
    80% {
      transform: translateY(-15%);
    }
    90% {
      transform: translateY(0%);
    }
    95% {
      transform: translateY(-7%);
    }
    97% {
      transform: translateY(0%);
    }
    99% {
      transform: translateY(-3%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes move-text {
    from {
      /* margin-left: -35%;
      margin-right: 0; */
    }
    to {
      margin: 12rem;
    }
  }

  .description::after {
    opacity: 0;
    content: "|";
    animation: blink 1s 1.5s step-end infinite;
  }
</style>
