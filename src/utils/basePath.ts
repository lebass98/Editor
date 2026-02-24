export function getImagePath(path: string) {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('data:')) return path;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // Ensure we don't end up with // if both basePath and path have a slash
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`.replace(/\/+/g, '/');
}
