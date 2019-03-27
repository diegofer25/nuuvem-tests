window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
        const { serviceWorker } = navigator
        window.addEventListener('load', async () => {
            try {
                serviceWorker.register('/sw_cache.js')
            } catch (e) {
                console.log(e)
            }
        })
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const subtitle = document.querySelector('h2.subtitle')

    window.addEventListener('offline', function (e) {
        subtitle.textContent = 'You are ONLINE and this page came from Server'
    })
    window.addEventListener('online', function (e) {
        subtitle.textContent = 'You are OFFLINE and this page came from Service Worker'
    })

    subtitle.textContent = `You are ${navigator.onLine ? 'ONLINE' : 'OFFLINE'} and this page came from ${navigator.onLine ? 'Server' : 'Service Worker'}`
})