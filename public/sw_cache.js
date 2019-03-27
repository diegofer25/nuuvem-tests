const version = 'v1'

self.addEventListener('install', async (event) => {

    const cache = await caches.open(version)
    await cache.addAll([
        '/',
        '/js/main.js',
        '/css/style.css'
    ])
    self.skipWaiting()
})

self.addEventListener('activate', async (event) => {

    const cacheVersions = await caches.keys()
    cacheVersions.map(cacheVersion => {
        if (cacheVersion !== version) caches.delete(cacheVersion)
    })

})

self.addEventListener('fetch', async (event) => {
    var response = undefined
    try {
        response = fetch(event.request)
    } catch (e) {
        response = caches.match(event.request)
    }
    event.respondWith(response)
})
