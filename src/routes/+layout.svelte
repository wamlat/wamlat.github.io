<script lang="ts">
  import "@fontsource/newsreader/400-italic.css";
  import "../app.css";
  import { browser, dev } from "$app/environment";
  import { fly } from "svelte/transition";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  const isMobile = browser && /Android|iPhone/i.test(navigator.userAgent);
  const reducedMotion =
    browser && matchMedia("(prefers-reduced-motion: reduce)").matches;

  // === Animated Hue Background ===
  let speed = 0; // Slider controls speed: 0 = no movement, 100 = full cycle in 5s
  let currentHue = 220;
  let lastTime: number | null = null;

  function animate(timestamp: number) {
    if (lastTime === null) lastTime = timestamp;
    const delta = timestamp - lastTime;
    lastTime = timestamp;

    const degPerMs = (72 / 1000) * (speed / 100); // 72 deg/sec max
    currentHue = (currentHue + delta * degPerMs) % 360;

    const color1 = `hsl(${currentHue}, 80%, 70%)`;
    const color2 = `hsl(${(currentHue + 40) % 360}, 80%, 75%)`;

    document.documentElement.style.setProperty("--bg-gradient-color-1", color1);
    document.documentElement.style.setProperty("--bg-gradient-color-2", color2);

    if (speed > 0) requestAnimationFrame(animate);
  }

  // ✅ Only one reactive block to trigger animation based on speed
  $: if (browser && speed >= 0) {
    lastTime = null;

    const color1 = `hsl(${currentHue}, 80%, 70%)`;
    const color2 = `hsl(${(currentHue + 40) % 360}, 80%, 75%)`;
    document.documentElement.style.setProperty("--bg-gradient-color-1", color1);
    document.documentElement.style.setProperty("--bg-gradient-color-2", color2);

    if (speed > 0) {
      requestAnimationFrame(animate);
    }
  }
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

<!-- Slider UI -->
<div
  class="fixed top-4 right-4 z-50 p-2 bg-white/30 dark:bg-black/30 backdrop-blur-sm rounded shadow"
>
  <label
    for="speedSlider"
    class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
    >Background Hue Speed</label
  >
  <input
    type="range"
    id="speedSlider"
    min="0"
    max="100"
    step="1"
    bind:value={speed}
    class="w-32 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
  />
</div>

<!-- Page Transitions -->
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
    --bg-gradient-color-1: hsl(220, 80%, 70%);
    --bg-gradient-color-2: hsl(260, 80%, 75%);
  }

  :global(body) {
    background-image: linear-gradient(
      to bottom right,
      var(--bg-gradient-color-1),
      var(--bg-gradient-color-2)
    );
    min-height: 100vh;
    transition: background-image 0.5s ease;
  }
</style>
