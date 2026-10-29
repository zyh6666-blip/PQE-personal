/* build 20261009-1802 */
/* 考研EP系统 Service Worker · v1.4.9.1 */
const CACHE_NAME = 'kaoyan-v1531e';
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

/* bump 2033 */

/* bump 2034 */

/* bump 2035 */

/* bump 2036 */

/* bump v1521-fixed */

/* bump fix2-1625 */

/* bump fix3-1710 */

/* bump fix4-1910 */

/* bump v1522 */

/* bump v1522-b2 */

/* bump v1522-b3 */

/* bump v1522-b4 */

/* bump v1522-b5 */

/* bump v1522-b7 */

/* bump v1522-b8 */

/* bump v1522-b8 */

/* bump v1522-b9 */

/* bump v1522-b10 */

/* bump v1523 */

/* bump v1523-b2 */

/* bump v1523-b3 */

/* bump v1523-b3 */

/* bump v1523-b4 */

/* bump v1523-b5 */

/* bump v1523-b6 */

/* bump v1523-b8 */

/* bump v1523-b9 */

/* bump v1523-b10 */

/* bump v1523-b11 */

/* bump v1523-b11 */

/* bump v1523-b12 */

/* bump v1523-b13 */

/* bump v1523-b15 */

/* bump v1523-b16 */

/* bump v1523-b17 */

/* bump v1523-b18 */

/* bump v1523-b19 */

/* bump v1523-b20 */

/* bump v1523-final */

/* bump final2 */

/* bump final3 */

/* bump final4 */

/* bump final5 */

/* bump final6 */

/* bump final7 */

/* bump final8 */

/* bump final9 */

/* bump final10 */

/* bump final11 */

/* bump final12 */

/* bump final13 */

/* bump v153-final2 */

/* bump v153-final3 · 内容更新触发ServiceWorker重装 */

/* 无关紧要的一句话：今天天气不错，适合猎杀铭影。 */

/* bump v155 · 悬赏板2.0 */

/* bump v156 · 最终实装版 */

/* bump v157 · 弹窗层级+死亡动画 */

/* bump v158 · 商店返回修复 */

/* bump v1531 · 版本号回1.5.3.1+图鉴窗口+抗性配色 */
