<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "./Workplace.svelte";
</script>

<Seo title="Sohum Sukhatankar – Resume" description="I just like learning." />

<section class="layout-md py-8">
  <h2 class="heading2">Education</h2>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">Harvard University</h3>
      <div class="text-neutral-500 mb-0.5">2027 — 2028</div>
    </div>
    <p class="byline">S.M. in Computer Science</p>
  </div>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">Harvard University</h3>
      <div class="text-neutral-500 mb-0.5">2024 — 2028</div>
    </div>
    <p class="byline">A.B. in Computer Science and Mathematics</p>
  </div>

  <h4 class="font-medium mt-4 mb-1">Undergraduate technical coursework:</h4>
  <ul>
    <li>CS 50: Intro to CS</li>
    <li>CS 61: Systems Programming</li>
    <li>CS 120: Algorithms</li>
    <li>CS 1810: Machine Learning</li>
    <li>AM 226: [Graduate] Computational Neuroscience</li>
    <li>MIT 18.337: Parallel Computing and Scientific ML</li>
    <li>Math 21a: Multivariable Calculus</li>
    <li>Math 21b: Linear Algebra</li>
    <li>Math 55b: Honors Topology, Real Analysis, and Complex Analysis</li>
    <li>Math 123: Algebra II - Theory of Rings and Fields</li>
    <li>Math 155R: Combinatorics</li>
    <li>Stat 110: Probability</li>
    <li>Stat 111: Statistical Inference</li>
  </ul>

</section>

<section class="layout-md py-8">
  <h2 class="heading2">Professional Experience</h2>


  <Workplace
    title="Software Engineering Intern"
    company="Newline Interactive"
    url="https://newline-interactive.com/usa/"
    dates="June 2025 – August 2025"
    location="Dallas, TX"
  >
    <li>
      Created internal RAG chatbot to assist IT team using OpenAI embeddings, ChromaDB, and semantic search to
deliver contextually-accurate responses with under 1s query latency and 90+% accuracy on benchmarks
    </li>
    <li>
      Architected full-stack chatbot features, employing a React frontend and scalable PostgreSQL-based backend for
logging 1k+ chat sessions and 10k+ feedback entries
    </li>
    <li>
      Engineered AI-based OCR pipeline to SAP, parsing purchase order PDFs into an SAP-readable payload,
transmitting them to SAP via a secure REST endpoint, and reducing manual data entry time by 85%
    </li>
  </Workplace>

 <Workplace
    title="Software Engineering Intern"
    company="Alibre, LLC"
    url="https://www.alibre.com/"
    dates="May 2025 – June 2025"
    location="Remote"
  >
    <li>
      Engineered end-to-end design pipeline, leveraging Stable Diffusion with custom text-to-image prompts to synthesize
images for downstream CAD workflows
    </li>
    <li>
      Wrote code for PNG-to-SVG conversion using Pillow, OpenCV, and NumPy to detect contours, and enforce
creation of non-self-intersecting B´ezier paths for successful extrusion
    </li>
    <li>
      Employed simplification algorithm to render input images of up to 1024x1024 resolution in under 3s
    </li>
  </Workplace>

   <Workplace
    title="Researcher"
    company="Madsen lab, Boston Children's Hospital"
    url=""
    dates="January 2025 - May 2025"
    location="Boston, MA"
  >
    <li>
      Developed a machine learning pipeline prototype to predict seizure onset localization strength by integrating
electrode spatial data and patient clinical metadata
    </li>
    <li>
      Created graph embeddings using node2vec to capture local and global patterns in directed graphs representing
networks of Granger causality
    </li>
    <li>
      Trained a PyTorch-based GNN, with performance benchmarked against a random forest baseline
    </li>
  </Workplace>
</section>

<section class="layout-md py-8">
  <h2 class="heading2">Awards and Honors</h2>

  <div class="mb-4">
    <h3 class="font-medium mb-1">Mathematics:</h3>
    <ul>
      <li><b>AIME:</b> Qualified x2</li>
    </ul>
  </div>

  <div class="mb-4">
    <h3 class="font-medium mb-1">Other:</h3>
    <ul>
      <li>
        <b>Scripps National Spelling Bee:</b> Participant (2017, 2018), Champion (2019), Highest written test score (2019)
      </li>
      <li>
        <b>National Academic Quiz Tournaments (Quiz Bowl):</b> Small School Nationals champion (2024), High School Nationals runner-up (2024), Intercollegiate Nationals DII champion (2025)
      </li>
    </ul>
  </div>


</section>

<style lang="postcss">
  b {
    @apply font-medium;
  }

  ul {
    @apply list-disc pl-7 marker:text-neutral-400;
  }

  .byline {
    @apply font-serif italic;
  }
</style>
