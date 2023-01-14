<script lang="ts">
  import GraphemeSplitter from "grapheme-splitter";

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

  setTimeout(() => {
    splitter.splitGraphemes(descriptionGoal).forEach((char, i) => {
      setTimeout(() => {
        description += char;
      }, 100 * i);
    });
  }, 100 * splitter.countGraphemes(name) + 2000);
</script>

<main>
  <div class="content">
    <h1 class="me">{name}</h1>
    <p class="description">{description}</p>
  </div>
</main>

<style>
  main {
    font-family: Clear Sans, Helvetica Neue, Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }

  .content {
    text-align: center;
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

  .description::after {
    opacity: 0;
    content: "|";
    animation: blink 1s 1.5s step-end infinite;
  }
</style>
