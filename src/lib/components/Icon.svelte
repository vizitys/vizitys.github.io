<script lang="ts">
  import * as icons from "$lib/icons";

  export let name: string;
  export let stroke = 3;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width={stroke}
  stroke="currentColor"
  class={`w-6 h-6 ${$$props.class}`}
>
  <path stroke-linecap="round" stroke-linejoin="round" d={icons[name]} />
</svg>
