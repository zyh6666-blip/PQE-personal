/* 考研EP系统 Service Worker · v1.4.7.1 */
const CACHE_NAME = 'kaoyan-v1471';
const APP_SHELL = ['./', './index.html'];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (c) { return c.addAll(APP_SHELL); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.map(function (k) {
          if (k !== CACHE_NAME) return caches.delete(k);
        }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

/* 同源 GET：缓存优先 + 后台更新（stale-while-revalidate），离线可用 */
self.addEventListener('fetch', function (e) {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    caches.match(req, { ignoreSearch: req.mode === 'navigate' }).then(function (hit) {
      const fetching = fetch(req).then(function (resp) {
        if (resp && resp.ok) {
          const copy = resp.clone();
          caches.open(CACHE_NAME).then(function (c) { c.put(req, copy); });
        }
        return resp;
      }).catch(function () { return null; });
      if (hit) { e.waitUntil(fetching); return hit; }
      return fetching.then(function (resp) {
        return resp || caches.match('./index.html');
      });
    })
  );
});
