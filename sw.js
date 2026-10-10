/* build 20261009-1802 */
/* 考研EP系统 Service Worker · v1.4.9.1 */
const CACHE_NAME = 'kaoyan-v152';
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

/* bump 0214 */

/* bump 0931 */
/* bump 0935 */

/* bump v151 */
/* bump 1042 */
/* bump 1048 */
/* bump 1050 */
/* bump 1058 */
/* bump 1108 */
/* bump 1616 */
/* bump 1659 */
/* bump 1700 */
/* bump 1708 */
/* bump 1712 */
/* bump 1712 */

/* bump 1802 */

/* bump 1930 */

/* bump 1940 */

/* bump 1950 */

/* bump 1945 */

/* bump 1948 */

/* bump 1949 */

/* bump 1952 */

/* bump 1953 */

/* bump 2010 */

/* bump 2020 */

/* bump 2025 */

/* bump 2030 */

/* bump 2026 */

/* bump 2032 */
