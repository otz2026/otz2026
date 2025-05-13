const CACHE_NAME = 'otz-cache-v1';
const urlsToCache = [
    '/otz2026/',
    '/otz2026/img/icon-512x512.png',
    '/otz2026/img/logo.png',
    '/otz2026/Database/featured_matches.json',
    '/otz2026/Database/schedule_data.json',
    '/otz2026/Database/news_data.json',
    '/otz2026/img/Paw Patrol.png',
    '/otz2026/img/Bulldogs.png',
    '/otz2026/img/Kitty Boys.png',
    '/otz2026/img/Megands.png',
    '/otz2026/img/Crumbl Bishes.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
