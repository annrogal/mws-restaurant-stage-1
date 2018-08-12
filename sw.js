var filesToCache = [
'./',
'css/styles.css',
'data/restaurants.json',
'img/1.jpg',
'img/2.jpg',
'img/3.jpg', 
'img/4.jpg',
'img/5.jpg',
'img/6.jpg',
'img/7.jpg',
'img/8.jpg', 
'img/9.jpp',
'img/10.jpg',
'js/dbhelper.js',
'js/restaurant_info.js',
'js/main.js',
'index.html',
'restaurant.html'
];


self.addEventListener("install", (evt) => {
    evt.waitUntill(caches.open('rr-pages-v1').then((cache) => {
        return cache.addAll(filesToCache);
    }));
});

self.addEventListener('fetch', (evt) => {
	evt.respondWith(
		caches.match(event.request, {ignoreSearch: true}).then((response) => {
			return response || fetch(event.request);
		})
	);
});

