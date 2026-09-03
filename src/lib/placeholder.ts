// Generates a branded inline-SVG data URI so gallery tiles look like a real
// portfolio while the real photos are pending. Replace a GalleryItem `src`
// with a real image path to drop in an actual photo — nothing else changes.

const PALETTES: [string, string, string][] = [
  ["#ff4fb0", "#ff8fce", "#fff2f9"], // brand pink
  ["#1b2ea8", "#4d67ff", "#eef1ff"], // brand blue
  ["#2fd0d8", "#7fe6ea", "#effdfd"], // brand cyan
  ["#ffb020", "#ffcf6b", "#fff7e6"], // warm amber
]

function paletteFor(seed: string): [string, string, string] {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0
  return PALETTES[h % PALETTES.length]
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

export function brandedPlaceholder(
  w: number,
  h: number,
  label: string,
): string {
  const [c1, c2, c3] = paletteFor(label)
  const id = Math.abs(
    [...label].reduce((a, c) => (a * 33 + c.charCodeAt(0)) | 0, 7),
  )
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img">
  <defs>
    <linearGradient id="g${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g${id})"/>
  <circle cx="${w * 0.82}" cy="${h * 0.2}" r="${Math.min(w, h) * 0.14}" fill="${c3}" opacity="0.35"/>
  <circle cx="${w * 0.15}" cy="${h * 0.82}" r="${Math.min(w, h) * 0.1}" fill="${c3}" opacity="0.25"/>
  <text x="50%" y="50%" fill="${c3}" font-family="Baloo 2, Comic Sans MS, sans-serif" font-size="${Math.round(Math.min(w, h) * 0.09)}" font-weight="700" text-anchor="middle" dominant-baseline="middle">${escapeXml(label)}</text>
</svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}
