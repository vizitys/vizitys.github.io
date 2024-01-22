<script lang="ts">
  import { icons } from "$lib/icons.ts";

  export let name: keyof typeof icons;
  export let stroke = 10;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox={icons[name].viewBox}
  height="50"
  width="50"
  stroke-width={stroke}
  class={`w-6 h-6 ${$$props.class || ""}`}
>
  <path d={icons[name].path} />
</svg>
