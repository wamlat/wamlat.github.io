---
title: Strange Attractor – Poincaré Map
date: 2025-04-25
repo: ""
topics: ["Python", "Chaos Theory", "Math"]
lead: A visualization of chaos using the Rössler attractor's Poincaré section.
image: poincare-map.png
website: https://wamlat.github.io/poincare-map
---

This project visualizes the chaotic behavior of the Rössler attractor using a
**Poincaré section** at \( z = 0 \).  
Each time the system's trajectory crosses the plane, we plot a point—revealing
the hidden fractal geometry.

**Links:** [Website](https://wamlat.github.io/poincare-map)

<details>
<summary>View Python Code</summary>

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import solve_ivp

a, b, c = 0.2, 0.2, 5.7

def rossler(t, state):
    x, y, z = state
    dx = -y - z
    dy = x + a * y
    dz = b + z * (x - c)
    return [dx, dy, dz]

y0 = [1.0, 1.0, 1.0]
t_span = (0, 500)
t_eval = np.linspace(*t_span, 100000)

sol = solve_ivp(rossler, t_span, y0, t_eval=t_eval, rtol=1e-9)
x, y, z = sol.y

poincare_x, poincare_y = [], []
for i in range(1, len(z)):
    if z[i-1] < 0 and z[i] >= 0:
        alpha = -z[i-1] / (z[i] - z[i-1])
        px = x[i-1] + alpha * (x[i] - x[i-1])
        py = y[i-1] + alpha * (y[i] - y[i-1])
        poincare_x.append(px)
        poincare_y.append(py)

plt.figure(figsize=(8, 6))
plt.scatter(poincare_x, poincare_y, s=0.5)
plt.title("Poincaré Map of Rössler Attractor (z=0)")
plt.xlabel("x")
plt.ylabel("y")
plt.grid(True)
plt.savefig("poincare-map.png", dpi=300)
plt.show()
```

</details>
