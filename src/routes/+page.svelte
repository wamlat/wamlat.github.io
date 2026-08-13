<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";

  const featuredProjects: {
    name: string;
    href: string;
    desc: string;
    aside?: string;
  }[] = [
    {
      name: "Poincaré map",
      href: "/projects#poincare-map",
      desc: "dynamical system modeler",
    },
  ];
</script>

<Seo title="Sohum Sukhatankar" description="Aura." />

<p
  class="layout-md text-black dark:text-white text-xl leading-tight font-light mb-16"
  id="eric-is"
>
  <span class="g">is a </span>learner<span class="g">,</span><br />
  researcher<span class="g">, and aspiring </span><br />
  mathematician<span class="g">.</span>
</p>

<div class="layout-md text-lg space-y-14">
  <div class="space-y-5">
    <p>I like learning.</p>
  </div>

  <div class="space-y-5">
    <p>
      In summer 2026, I completed my sophomore year at Harvard, where I studied mathematics,
      statistics, and computer science. In
      the past, I was a member of the WOLF (linguistic fieldwork) lab and wrote
      for the Crimson. Currently, I am on leave working on my startup! 🤫
    </p>

    <p>Other interests: reading, running, cats, baking, and rhythm games.</p>
  </div>
</div>

<style lang="postcss">
  .g {
    @apply text-neutral-400;
  }

  em {
    @apply font-serif text-[110%] leading-[100%];
  }

  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors;
  }

  aside {
    @apply mt-0.5 text-base text-neutral-500;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #eric-is {
      @apply -mt-10;
    }
  }
</style>
