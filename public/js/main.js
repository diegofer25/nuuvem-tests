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

    const changeSubtitle = () => {
        subtitle.textContent = `You are ${navigator.onLine ? 'ONLINE' : 'OFFLINE'} and this page came from ${navigator.onLine ? 'Server' : 'Service Worker'}`
    }
    window.onoffline = changeSubtitle
    window.ononline = changeSubtitle

    subtitle.textContent = `You are ${navigator.onLine ? 'ONLINE' : 'OFFLINE'} and this page came from ${navigator.onLine ? 'Server' : 'Service Worker'}`    
})