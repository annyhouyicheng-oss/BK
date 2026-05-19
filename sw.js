// ENcore+ 2026 曼谷旅遊 Service Worker
// v2 — 網路優先，清除舊快取
const CACHE_NAME = 'bangkok-2026-v2';

self.addEventListener('install', () => self.skipWaiting());

// Activate: 刪除所有舊快取
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Fetch: 永遠網路優先，失敗才用快取
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
