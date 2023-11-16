// import 'regenerator-runtime';
// import CacheHelper from './utils/cache-helper';

// // Daftar asset yang akan dicaching
// const assetsToCache = [
//   './',
//   './icons/icons-72.png',
//   './icons/icons-96.png',
//   './icons/icons-128.png',
//   './icons/icons-144.png',
//   './icons/icons-152.png',
//   './icons/icons-192.png',
//   './icons/icons-384.png',
//   './icons/icons-512.png',
//   './index.html',
//   './favicon.png',
//   './app.bundle.js',
//   './app.webmanifest',
//   './sw.bundle.js',
// ];

// self.addEventListener('install', (event) => {
//   event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
// });

// self.addEventListener('activate', (event) => {
//   event.waitUntil(CacheHelper.deleteOldCache());
// });

// self.addEventListener('fetch', (event) => {
//   event.respondWith(CacheHelper.revalidateCache(event.request));
// });
