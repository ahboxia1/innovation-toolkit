/**
 * radar-calc.mjs — SVG radar chart coordinate calculator
 *
 * Input: array of scores (0-10) for N dimensions
 * Output: polygon points string + individual dot coordinates
 */

const TWO_PI = 2 * Math.PI;

/**
 * Calculate radar chart geometry.
 * @param {number[]} scores - Array of scores, each 0-10
 * @param {object} opts - { cx, cy, radius }
 * @returns {{ points: string, dots: {x:number,y:number}[], grid: string }}
 */
export function calcRadar(scores, { cx = 150, cy = 150, radius = 120 } = {}) {
  const n = scores.length;
  if (n < 3) throw new Error('Need at least 3 dimensions for a radar chart');
  const angleStep = TWO_PI / n;
  const startAngle = -Math.PI / 2; // first point at top

  const coords = scores.map((s, i) => {
    const clamped = Math.max(0, Math.min(10, s));
    const r = (clamped / 10) * radius;
    const angle = startAngle + i * angleStep;
    return { x: +(cx + r * Math.cos(angle)).toFixed(2), y: +(cy + r * Math.sin(angle)).toFixed(2) };
  });

  const points = coords.map(c => `${c.x},${c.y}`).join(' ');
  return { points, dots: coords };
}

/**
 * Generate SVG grid lines for the radar chart.
 * @param {number} n - Number of dimensions
 * @param {object} opts - { cx, cy, radius, rings }
 * @returns {string} SVG markup for grid circles and axis lines
 */
export function gridSVG(n, { cx = 150, cy = 150, radius = 120, rings = 3 } = {}) {
  const angleStep = TWO_PI / n;
  const startAngle = -Math.PI / 2;
  const ringGap = radius / (rings + 1);

  let svg = '';
  // Concentric rings
  for (let i = 1; i <= rings; i++) {
    const r = +(ringGap * i).toFixed(1);
    svg += `  <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#e5e7eb" stroke-width=".5"/>\n`;
  }
  // Axis lines from center to each vertex
  for (let i = 0; i < n; i++) {
    const angle = startAngle + i * angleStep;
    const x2 = +(cx + radius * Math.cos(angle)).toFixed(2);
    const y2 = +(cy + radius * Math.sin(angle)).toFixed(2);
    svg += `  <line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" stroke="#d1d5db" stroke-width=".5"/>\n`;
  }
  return svg.trimEnd();
}
