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

  // === Dark Mode Toggle ===
  let dark = browser && localStorage.getItem("theme") === "dark";

  function toggleTheme() {
    dark = !dark;
    applyTheme();
  }

  function applyTheme() {
    if (!browser) return;
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }

  // Apply on mount
  $: if (browser) {
    // On first load, check localStorage or system preference
    if (localStorage.getItem("theme") === null) {
      dark = matchMedia("(prefers-color-scheme: dark)").matches;
    }
    applyTheme();
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

<button
  on:click={toggleTheme}
  class="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-sm shadow hover:bg-white/50 dark:hover:bg-black/50 transition-colors"
  aria-label="Toggle theme"
>
  {#if dark}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="text-yellow-300"
      ><circle cx="12" cy="12" r="5" /><line
        x1="12"
        y1="1"
        x2="12"
        y2="3"
      /><line x1="12" y1="21" x2="12" y2="23" /><line
        x1="4.22"
        y1="4.22"
        x2="5.64"
        y2="5.64"
      /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line
        x1="1"
        y1="12"
        x2="3"
        y2="12"
      /><line x1="21" y1="12" x2="23" y2="12" /><line
        x1="4.22"
        y1="19.78"
        x2="5.64"
        y2="18.36"
      /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg
    >
  {:else}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="text-neutral-700"
      ><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg
    >
  {/if}
</button>

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
  :global(body) {
    min-height: 100vh;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  :global(.dark body) {
    @apply bg-neutral-900 text-neutral-300;
  }

  :global(.dark .text-black) {
    @apply text-white;
  }
</style>
