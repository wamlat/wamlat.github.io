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
const amber = "#c8a46e";
const amberFaint = "rgba(200, 164, 110, 0.5)";
const gridColor = "rgba(255, 255, 255, 0.04)";
const tickColor = "#3a3a48";

const ctx = document.getElementById("chart").getContext("2d");
const chart = new Chart(ctx, {
  type: "scatter",
  data: {
    datasets: [
      {
        label: "Poincare Section",
        data: [],
        pointRadius: 1.8,
        pointHoverRadius: 5,
        pointBackgroundColor: amber,
        pointBorderColor: "transparent",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: amber,
        pointHoverBorderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500, easing: "easeOutQuart" },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#0e0e14",
        titleColor: "#5a5a6a",
        bodyColor: "#c8c8d0",
        borderColor: "#1a1a24",
        borderWidth: 1,
        cornerRadius: 6,
        padding: 10,
        bodyFont: { family: "'JetBrains Mono', monospace", size: 11 },
        displayColors: false,
        callbacks: {
          title: () => "",
          label: (ctx) =>
            `x ${ctx.parsed.x.toFixed(4)}   z ${ctx.parsed.y.toFixed(4)}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "x",
          color: tickColor,
          font: {
            family: "'Cormorant Garamond', serif",
            size: 16,
            style: "italic",
          },
          padding: { top: 8 },
        },
        grid: { color: gridColor, lineWidth: 1 },
        ticks: {
          color: tickColor,
          font: { family: "'JetBrains Mono', monospace", size: 10 },
          maxTicksLimit: 8,
        },
        border: { color: "rgba(255, 255, 255, 0.06)" },
      },
      y: {
        title: {
          display: true,
          text: "z",
          color: tickColor,
          font: {
            family: "'Cormorant Garamond', serif",
            size: 16,
            style: "italic",
          },
          padding: { bottom: 8 },
        },
        grid: { color: gridColor, lineWidth: 1 },
        ticks: {
          color: tickColor,
          font: { family: "'JetBrains Mono', monospace", size: 10 },
          maxTicksLimit: 8,
        },
        border: { color: "rgba(255, 255, 255, 0.06)" },
      },
    },
  },
});

let abortController = null;

async function updateChart() {
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
        "Trajectory diverged \u2014 system unstable for these parameters. Showing partial results.";
      warning.classList.remove("hidden");
    } else if (count === 0) {
      warning.textContent =
        "No crossings detected for these parameters. Try adjusting c.";
      warning.classList.remove("hidden");
    }
  } catch (err) {
    if (err.name !== "AbortError") {
      warning.textContent = "Could not reach the server. Is the backend up?";
      warning.classList.remove("hidden");
      pointCount.textContent = "\u2014";
    }
  } finally {
    loading.classList.add("hidden");
  }
}

window.addEventListener("load", updateChart);
