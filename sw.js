this.addEventListener('install' , e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll(["./",
            "./style/style.css",
            "./favicon.png",
            "./icon150x150.png",
            "./style/ss.jpg",
            "./style/images/bongo.png",
            "./style/images/cowbell.png",
            "./style/images/cymbal.png",
            "./style/images/keyboard.png",
            "./style/images/marimba.png",
            "./style/images/mouth.png",
            "./style/images/paw-left.png",
            "./style/images/paw-right.png",
            "./style/images/shinchan.png",
            "./style/images/tambourine.png",
            "./js/lowLag.js",
            "./js/index.js",
            "./sounds/bongo0.mp3",
            "./sounds/bongo0.wav",
            "./sounds/bongo1.mp3",
            "./sounds/bongo1.wav",
            "./sounds/cowbell.mp3",
            "./sounds/cowbell.wav",
            "./sounds/cymbal.mp3",
            "./sounds/cymbal.wav",
            "./sounds/shinchan.mp3",
            "./sounds/shinchan.wav",
            "./sounds/tambourine.mp3",
            "./sounds/tambourine.wav",
            "./sounds/keyboard0.mp3",
            "./sounds/keyboard1.mp3",
            "./sounds/keyboard2.mp3",
            "./sounds/keyboard3.mp3",
            "./sounds/keyboard4.mp3",
            "./sounds/keyboard5.mp3",
            "./sounds/keyboard6.mp3",
            "./sounds/keyboard7.mp3",
            "./sounds/keyboard8.mp3",
            "./sounds/keyboard9.mp3",
            "./sounds/keyboard0.wav",
            "./sounds/keyboard1.wav",
            "./sounds/keyboard2.wav",
            "./sounds/keyboard3.wav",
            "./sounds/keyboard4.wav",
            "./sounds/keyboard5.wav",
            "./sounds/keyboard6.wav",
            "./sounds/keyboard7.wav",
            "./sounds/keyboard8.wav",
            "./sounds/keyboard9.wav",
            "./sounds/marimba0.mp3",
            "./sounds/marimba1.mp3",
            "./sounds/marimba2.mp3",
            "./sounds/marimba3.mp3",
            "./sounds/marimba4.mp3",
            "./sounds/marimba5.mp3",
            "./sounds/marimba6.mp3",
            "./sounds/marimba7.mp3",
            "./sounds/marimba8.mp3",
            "./sounds/marimba9.mp3",
            "./sounds/marimba0.wav",
            "./sounds/marimba1.wav",
            "./sounds/marimba2.wav",
            "./sounds/marimba3.wav",
            "./sounds/marimba4.wav",
            "./sounds/marimba5.wav",
            "./sounds/marimba6.wav",
            "./sounds/marimba7.wav",
            "./sounds/marimba8.wav",
            "./sounds/marimba9.wav"
        ]);
        })
    );
});

this.addEventListener('fetch' , e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
    console.log(`Intercwpting fetch requet for : ${e.request.url}`);
});