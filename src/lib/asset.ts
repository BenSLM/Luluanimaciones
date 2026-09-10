// Resolves runtime asset paths against Vite's base so the site works both in
// dev ("/") and when deployed under a subpath on GitHub Pages
// ("/luluanimaciones/").
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`
}