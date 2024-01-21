<script lang="ts">
  import GraphemeSplitter from "grapheme-splitter";

  // scroll container
  let scrollWrapper: HTMLDivElement;
  let scrollContainers: HTMLElement[] = [];

  $: console.log(scrollContainers);

  // dumb solution for dumb unicode problem aka emojis being more than one character
  const splitter = new GraphemeSplitter();

  const nameGoal = "Vinski Lång";
  const descriptionGoal = "Site still in development 🛠️";

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
</script>

<main>
  <div id="scroll-wrapper" bind:this={scrollWrapper}>
    <section
      id="1"
      class="site-section bg-background"
      bind:this={scrollContainers[$$props.id]}
    >
      <div class="content mt-10">
        <div class="title-container m-52">
          <h1 class="me">{name}</h1>
          <p class="description">{description}</p>
        </div>
        <img
          src="./src/static/me.jpg"
          alt="Profile of Vinski Lång"
          class="profile-pic rounded-full"
        />
      </div>
    </section>
    <section
      id="2"
      class="site-section bg-background"
      bind:this={scrollContainers[$$props.id]}
    >
      mömmömmöö
    </section>
    <section
      id="3"
      class="site-section bg-background"
      bind:this={scrollContainers[$$props.id]}
    >
      mömmömmöö
    </section>
    <section
      id="4"
      class="site-section bg-background"
      bind:this={scrollContainers[$$props.id]}
    >
      mömmömmöö
    </section>
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
    transition: all 2.5s ease;

    scroll-snap-type: y mandatory;
    scroll-snap-stop: always;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }

  .site-section {
    display: flex;
    justify-content: center;
    align-items: center;

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

  .content {
    display: flex;
    flex-direction: row-reverse;

    width: 70%;

    justify-content: center;
    align-items: center;
  }

  .title-container {
    text-align: center;
    animation: move-text 2s 3s forwards cubic-bezier(0.32, 0.08, 0.43, 0.99);

    margin-left: -35%;
    margin-right: 0;
  }

  .profile-pic {
    animation: fade-in 2s 4s forwards cubic-bezier(0.32, 0.08, 0.43, 0.99);
    opacity: 0;
    width: 35%;
  }

  h1 {
    font-weight: 700;
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
      margin: 13rem;
    }
  }

  .description::after {
    opacity: 0;
    content: "|";
    animation: blink 1s 1.5s step-end infinite;
  }
</style>
