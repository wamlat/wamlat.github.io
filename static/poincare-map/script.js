const API_URL = "https://poincare-api.onrender.com";

const aSlider = document.getElementById("param-a");
const bSlider = document.getElementById("param-b");
const cSlider = document.getElementById("param-c");
const aNum = document.getElementById("a-num");
const bNum = document.getElementById("b-num");
const cNum = document.getElementById("c-num");
const pointCount = document.getElementById("point-count");
const warning = document.getElementById("warning");
const loading = document.getElementById("loading");

// Sync sliders and number inputs
function syncInputs(slider, numInput) {
  slider.addEventListener("input", () => {
    numInput.value = slider.value;
    debouncedUpdate();
  });
  numInput.addEventListener("input", () => {
    slider.value = numInput.value;
    debouncedUpdate();
  });
}

syncInputs(aSlider, aNum);
syncInputs(bSlider, bNum);
syncInputs(cSlider, cNum);

// Debounce to avoid spamming requests while sliding
let debounceTimer;
function debouncedUpdate() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(updateChart, 300);
}

// Presets
document.querySelectorAll(".preset").forEach((btn) => {
  btn.addEventListener("click", () => {
    aSlider.value = aNum.value = btn.dataset.a;
    bSlider.value = bNum.value = btn.dataset.b;
    cSlider.value = cNum.value = btn.dataset.c;
    updateChart();
  });
});

// Chart setup
const ctx = document.getElementById("chart").getContext("2d");
const chart = new Chart(ctx, {
  type: "scatter",
  data: {
    datasets: [
      {
        label: "Poincaré Section",
        data: [],
        pointRadius: 2.5,
        pointHoverRadius: 5,
        pointBackgroundColor: "#4a6cf7",
        pointBorderColor: "transparent",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 400 },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1a1a2a",
        titleColor: "#888",
        bodyColor: "#e0e0e8",
        borderColor: "#2a2a3a",
        borderWidth: 1,
        cornerRadius: 8,
        padding: 10,
        bodyFont: { family: "'SF Mono', 'Fira Code', monospace", size: 12 },
        callbacks: {
          label: (ctx) =>
            `x: ${ctx.parsed.x.toFixed(4)}  z: ${ctx.parsed.y.toFixed(4)}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "x",
          color: "#555",
          font: { style: "italic", family: "Georgia, serif" },
        },
        grid: { color: "#1a1a25" },
        ticks: {
          color: "#444",
          font: { family: "'SF Mono', monospace", size: 11 },
        },
        border: { color: "#1e1e2e" },
      },
      y: {
        title: {
          display: true,
          text: "z",
          color: "#555",
          font: { style: "italic", family: "Georgia, serif" },
        },
        grid: { color: "#1a1a25" },
        ticks: {
          color: "#444",
          font: { family: "'SF Mono', monospace", size: 11 },
        },
        border: { color: "#1e1e2e" },
      },
    },
  },
});

let abortController = null;

async function updateChart() {
  // Abort any in-flight request
  if (abortController) abortController.abort();
  abortController = new AbortController();

  loading.classList.remove("hidden");
  warning.classList.add("hidden");

  try {
    const res = await fetch(`${API_URL}/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        a: parseFloat(aSlider.value),
        b: parseFloat(bSlider.value),
        c: parseFloat(cSlider.value),
      }),
      signal: abortController.signal,
    });

    const data = await res.json();

    // Handle new response format (object with points/diverged/count)
    // and old format (raw array) for backwards compatibility
    let points, diverged, count;
    if (Array.isArray(data)) {
      points = data;
      diverged = false;
      count = data.length;
    } else {
      points = data.points;
      diverged = data.diverged;
      count = data.count;
    }

    chart.data.datasets[0].data = points.map((p) => ({ x: p.x, y: p.z }));
    chart.update();

    pointCount.textContent = count.toLocaleString();

    if (diverged) {
      warning.textContent =
        "Trajectory diverged — the system is unstable for these parameters. Showing partial results.";
      warning.classList.remove("hidden");
    } else if (count === 0) {
      warning.textContent = "No Poincaré crossings found for these parameters.";
      warning.classList.remove("hidden");
    }
  } catch (err) {
    if (err.name !== "AbortError") {
      warning.textContent =
        "Failed to reach the server. Is the backend running?";
      warning.classList.remove("hidden");
      pointCount.textContent = "—";
    }
  } finally {
    loading.classList.add("hidden");
  }
}

window.addEventListener("load", updateChart);
