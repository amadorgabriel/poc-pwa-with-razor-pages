this.addEventListener('install', function (event) {
    //event.waitUntil(
    //    caches.open('v1').then(function (cache) {
    //        return cache.addAll([
    //            'index.html',
    //            'page_script.js',
    //            'style.css',
    //            'index.html',
    //            '/images/set1.jpg',
    //            '/images/set2.jpg',
    //            '/images/set3.jpg'
    //        ]);
    //    })
    //);
});

this.addEventListener('fetch', function (event) {
    if (
        event.request.url.startsWith('chrome-extension') ||
        event.request.url.includes('extension') ||
        !(event.request.url.indexOf('http') === 0)
    ) return;

    event.respondWith(
        caches.open('v1').then(function (cache) {
            return cache.match(event.request).then(function (response) {
                return response || fetch(event.request).then(function (response) {
                    cache.put(event.request, response.clone());
                    return response;
               });
            });
      })
    );
});

this.addEventListener('activate', function activator(event) {
    event.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(keys
                .filter(function (key) {
                    return key.indexOf('v1') !== 0;
                })
                .map(function (key) {
                    return caches.delete(key);
                })
            );
        })
    );
});