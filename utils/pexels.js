// lib/pexels.js

const cache = new Map();

export async function searchPhotos(query, perPage = 1) {
  if (cache.has(query)) return cache.get(query);

  const res = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}`, {
    headers: { Authorization: process.env.PEXELS_API_KEY },
    next: { revalidate: 86400 } // 24h cache at build
  });
  if (!res.ok) return [];

  const data = await res.json();
  cache.set(query, data.photos || []);
  return data.photos || [];
}
