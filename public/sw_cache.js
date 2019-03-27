const version = 'v1'

self.addEventListener('install', async () => {
    
    // Cacheando desta forma podemos guardar recursos específicos independentemente da navegação no usuário

    // const cache = await caches.open(version)
    // await cache.addAll([
    //     '/',
    //     '/js/main.js',
    //     '/css/style.css'
    // ])

})

self.addEventListener('activate', async () => {

    const cacheVersions = await caches.keys()
    cacheVersions.map(cacheVersion => {
        if (cacheVersion !== version) caches.delete(cacheVersion)
    })

})

self.addEventListener('fetch', (event) => {
    // Desta outra forma vamos cacheando de acordo com a navegação do usuário
    event.respondWith(

        fetch(event.request)
            .then(async res => {
                const clone = res.clone()

                if (!event.request.url.includes('chrome-extension')) {
                    const cache = await caches.open(version)
                    cache.put(event.request, clone)
                }
                return res
            })
            .catch(err => caches.match(event.request))

    )    
})
