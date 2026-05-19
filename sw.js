// ENcore+ 2026 — v3 不快取版
// 每次都從網路抓，徹底解決快取問題
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
  // 刪除所有舊快取
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// 完全不快取，每次都走網路
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
