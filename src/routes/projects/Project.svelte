<script lang="ts">
  import Markdown from "$lib/components/Markdown.svelte";

  type Project = {
    title: string;
    date: string;
    content: string;
    repo: string;
    topics: string[];
    lead: string;
    image: string;
    image_border?: boolean;
    subimages?: string[];
  };

  export let data: Project;
  export let images: Record<string, { default: string }>;
</script>

<!-- Title -->
<h3 class="text-black text-xl font-semibold mb-2">
  <span class="mr-1">{data.title}</span>
</h3>

<!-- Tags (pill bar) -->
<div class="flex flex-wrap mb-1">
  {#each data.topics as tag}
    <div class="pill">{tag}</div>
  {/each}
</div>

<!-- Description and image -->
<div class="space-y-4">
  <div class="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12">
    <div class="col-span-3 md:col-span-2">
      <p class="text-lg font-light mb-3">{data.lead}</p>
      <Markdown source={data.content} />
    </div>
    <div class="col-span-3 md:col-span-1">
      <a rel="external" href={images[`../../projects/${data.image}`]?.default}>
        <img
          src={images[`../../projects/${data.image}`]?.default}
          alt="{data.title} preview image"
          class:border={data.image_border}
        />
      </a>
    </div>
  </div>

  {#if data.subimages}
    <div class="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12">
      {#each data.subimages as image}
        <div class="col-span-full md:col-span-1">
          <a rel="external" href={images[`../../projects/${image}`]?.default}>
            <img
              src={images[`../../projects/${image}`]?.default}
              alt="{data.title} subimage"
            />
          </a>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style lang="postcss">
  .pill {
    @apply flex items-center text-sm font-medium;
    @apply px-1.5 py-[1px] mr-1.5 mb-2 bg-neutral-100 rounded-full;
  }
</style>
