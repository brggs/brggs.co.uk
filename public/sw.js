// Service Worker Kill Switch
// This file unregisters the old Gatsby service worker

self.addEventListener('install', function(event) {
  // Skip waiting and activate immediately
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  // Unregister this service worker
  event.waitUntil(
    self.registration.unregister().then(function() {
      // Clear all caches
      return self.caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            return self.caches.delete(cacheName);
          })
        );
      });
    })
  );
});
