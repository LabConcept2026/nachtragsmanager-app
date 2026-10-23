// Hintergrund-Helfer, damit Browser und Handy die Seite als App installieren koennen.
// Er speichert bewusst nichts zwischen: Programm und Daten kommen immer frisch und nur nach der Anmeldung.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  // Nur die eigene Startseite; alles andere (Supabase) laeuft ganz normal am Helfer vorbei.
  if (new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(fetch(e.request));
});
