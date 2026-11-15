// Minimaler Service-Worker: nur für die Installierbarkeit. Speichert nichts; die Seite kommt immer frisch aus dem Netz (am Browser-Cache vorbei, sonst bis 10 Min. alte Version).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') e.respondWith(fetch(e.request, { cache: 'no-store' }).catch(() => fetch(e.request)));
});
