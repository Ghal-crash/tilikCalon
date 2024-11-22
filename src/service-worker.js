/* eslint-disable no-restricted-globals */
// atau bisa menggunakan: /* global self */

self.addEventListener('install', event => {
  console.log('Service Worker installing.');
  event.waitUntil(
      caches.open('my-pwa-cache').then(cache => {
          return cache.addAll([
              '/',
              '/index.html',
              '/static/js/bundle.js',
          ]);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
      caches.match(event.request).then(response => {
          return response || fetch(event.request);
      })
  );
});