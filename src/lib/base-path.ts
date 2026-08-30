/**
 * The app is served from "/portfolio" on GitHub Pages and from "/" elsewhere.
 * next/link and next/image apply basePath automatically — plain <a href> and
 * raw asset URLs do not, so route them through this helper.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}
