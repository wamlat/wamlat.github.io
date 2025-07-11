<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { CalendarDays } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";
  import Project from "./Project.svelte";

  const projects = import.meta.glob("../../projects/*.md", {
    eager: true,
  }) as any;
  const images = import.meta.glob("../../projects/*.{png,jpg,svg}", {
    eager: true,
  }) as any;

  function trimName(id: string) {
    return id.match(/\.\.\/projects\/(.*)\.md$/)?.[1];
  }

  $: projectsByDate = Object.keys(projects).sort(
    (a, b) => projects[b].date - projects[a].date
  );
  $: projectsByTitle = Object.keys(projects).sort((a, b) => {
    const titleA = projects[a].title.toLowerCase();
    const titleB = projects[b].title.toLowerCase();
    return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
  });

  onMount(() => {
    // Hack: Fix the scroll position after the page loads, especially for mobile browsers.
    const selected = $page.url.hash.slice(1);
    if (selected) {
      setTimeout(() => {
        if ($page.url.hash.slice(1) === selected) {
          document.getElementById(selected)?.scrollIntoView();
        }
      }, 500);
    }
  });

  let sortOrder: "date" | "title" = "date";
</script>

<Seo title="Sohum Sukhatankar – Projects" description="I just like learning." />

<section class="layout-md py-12">
  <h2 class="heading2">Open Source</h2>

  <p class="text-lg mb-4">
    I view building software in the open as a mode of <em
      class="font-serif text-[110%] leading-[100%]">creative exploration</em
    >. It lets me quickly act on inspiration, delve into new topics, and make
    tools that improve people's lives.
  </p>

  <p class="text-lg mb-4">You'll see that I particularly like learning.</p>

  <p class="text-lg">
    If you find something interesting,
    <a class="link" href="mailto:tosohum@gmail.com?subject=Software%20Projects"
      >let me know</a
    >!
  </p>
</section>

<div class="bg-gray-900 text-neutral-200 dark">
  <section class="layout-md py-12">
    <h2 class="heading2 text-white">Table of Contents</h2>
    <ul class="sm:columns-2">
      {#each projectsByTitle as id (id)}
        <li>
          <a class="link" href="#{trimName(id)}">{projects[id].title}</a>
        </li>
      {/each}
    </ul>
  </section>
</div>

<div class="bg-neutral-50 border-b border-neutral-200 py-4">
  <div class="flex justify-center space-x-6">
    <button
      class:active={sortOrder === "date"}
      on:click={() => (sortOrder = "date")}
    >
      <CalendarDays size={18} strokeWidth={1.8} class="mr-1.5" /> by Date
    </button>
    <button
      class:active={sortOrder === "title"}
      on:click={() => (sortOrder = "title")}
    >
      by Title
    </button>
  </div>
</div>

{#each sortOrder === "date" ? projectsByDate : projectsByTitle as id (id)}
  <section class="py-10" id={trimName(id)}>
    <div class="mx-auto max-w-[1152px] px-4 sm:px-6">
      <Project data={projects[id]} {images} />
    </div>
  </section>
{/each}

<style lang="postcss">
  button {
    @apply flex items-center text-neutral-400 transition-colors hover:text-black;
  }

  button.active {
    @apply text-black;
  }
</style>
