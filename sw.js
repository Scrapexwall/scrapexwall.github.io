const CACHE_NAME = 'scrapex-v4';
const assets = [
  './',
  './index.html',
  './Logo.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap'
];

// ইন্সটল ইভেন্ট
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// ফেচ ইভেন্ট (এটি ছাড়া ইন্সটল অপশন আসবে না)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
