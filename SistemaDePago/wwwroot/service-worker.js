const { event } = require("jquery")

var nombreCacheEstaticos = "cacheEstaticos1"
var erchivosEstaticos = [
    "/css/menu.css", "/SistemaDePago.styles.css",
    "/lib/jquery/dist/jquery.min.js",
    "/lib/bootstrap/dist/js/bootstrap.bundle.min.js",
    "/js/menu.js","/"
]
self.addEventListener("install", event => {
    console.log("Evento Activate")
    event.waitUntil(
        caches.open(nombreCacheEstaticos).the(cache => {
            return cache.addAll(archivosEstaticos)
        })
    )
})

self.addEventListener("install", event => {
    console.log("Evento Activate")
})
self.addEventListener("activate", event => {
    console.log("Evento Activate")
    event.waitUntil(self.clients.claim())
})

selft.addEventListener("fetch", event => {
    const respuesta = caches.match(event.request).then(res => {
        if (res) return res;
        else {
            return fetch(event.request).then(response => {
                return response;
            })
        }
    }).catch(err => {
        return null;
    })
})


self.addEventListener("fetch", event => {
    //if (event.request.url == ""https://localhost:7061/css/menu.css) {
       // event.respondWith(null);
   // } else {
        event.respondWith(fetch(event.request.url))
     // console.log(event.request.url)
    //}
})