export function getImagePath(path: string) {
  // GitHub Pages deployment uses /Editor basePath in production
  const basePath = process.env.NODE_ENV === 'production' ? '/Editor' : '';
  if (path.startsWith('http')) return path;
  return `${basePath}${path}`;
}
