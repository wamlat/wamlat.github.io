<script lang="ts">
  // === Original Imports ===
  import "@fontsource/newsreader/400-italic.css";
  import "../app.css"; // Make sure app.css doesn't set a conflicting background
  import { browser, dev } from "$app/environment"; // browser is now used below too
  import { fly } from "svelte/transition";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import type { LayoutData } from "./$types";
  // import { onMount } from 'svelte'; // Only needed if using onMount below

  // === Original Exports/Variables ===
  export let data: LayoutData;
  const isMobile = browser && /Android|iPhone/i.test(navigator.userAgent);
  const reducedMotion =
    browser && matchMedia("(prefers-reduced-motion: reduce)").matches;

  // === Slider Variables & Logic (Added Here) ===
  let sliderValue: number = 220; // Default hue value (e.g., a blue/purple)

  // Reactive statement: This code runs whenever sliderValue changes
  $: if (browser) {
    // Update CSS custom properties on the root HTML element
    // We use HSL color format (Hue, Saturation, Lightness) for easy rotation
    const color1 = `hsl(${sliderValue}, 80%, 70%)`; // Adjust saturation/lightness as desired
    const color2 = `hsl(${(sliderValue + 40) % 360}, 80%, 75%)`; // A second color, shifted on the hue wheel

    document.documentElement.style.setProperty("--bg-gradient-color-1", color1);
    document.documentElement.style.setProperty("--bg-gradient-color-2", color2);
  }

  // Optional: If you want to set the CSS variables immediately when the component loads
  // onMount(() => {
  //   if (browser) {
  //     const initialColor1 = `hsl(${sliderValue}, 80%, 70%)`;
  //     const initialColor2 = `hsl(${(sliderValue + 40) % 360}, 80%, 75%)`;
  //     document.documentElement.style.setProperty('--bg-gradient-color-1', initialColor1);
  //     document.documentElement.style.setProperty('--bg-gradient-color-2', initialColor2);
  //   }
  // });
</script>

<svelte:head>
  {#if !dev}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-156644599-1"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "UA-156644599-1");
    </script>
  {/if}
</svelte:head>

<Header />

<div
  class="fixed top-4 right-4 z-50 p-2 bg-white/30 dark:bg-black/30 backdrop-blur-sm rounded shadow"
>
  <label
    for="colorSlider"
    class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
    >Background Hue</label
  >
  <input
    type="range"
    id="colorSlider"
    min="0"
    max="360"
    step="1"
    bind:value={sliderValue}
    class="w-32 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
  />
</div>

{#if isMobile || reducedMotion}
  <main>
    <slot />
  </main>
{:else}
  {#key data.pathname}
    <main
      in:fly={{ x: -10, duration: 350, delay: 350 }}
      out:fly={{ y: 5, duration: 350 }}
    >
      <slot />
    </main>
  {/key}
{/if}

<Footer />

<style lang="postcss">
  :root {
    /* Define default values so the background exists before JS runs */
    --bg-gradient-color-1: hsl(220, 80%, 70%);
    --bg-gradient-color-2: hsl(260, 80%, 75%);

    /* Optional: transition CSS variables for smoother changes if supported */
    /* transition: --bg-gradient-color-1 0.5s ease, --bg-gradient-color-2 0.5s ease; */
  }

  :global(body) {
    /* Apply the gradient using the CSS variables */
    background-image: linear-gradient(
      to bottom right,
      var(--bg-gradient-color-1),
      var(--bg-gradient-color-2)
    );
    /* Ensure body takes at least full height */
    min-height: 100vh;
    /* Add transition for smooth background color changes */
    transition: background-image 0.5s ease;
    /* NOTE: If your '../app.css' file already sets a background on the body, */
    /* you might need to remove it from there or use '!important' here, */
    /* but modifying app.css is cleaner if possible. */
  }
</style>
