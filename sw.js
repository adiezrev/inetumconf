const CACHE_NAME = "inetumconf";
const CACHE_VERSION = "0.5";
const CACHE = CACHE_NAME+"-"+CACHE_VERSION;

const APP_SHELL =[
    'inetumconf.html',
    'manifest.json',
    'assets/css/inetumconf.css',
    'assets/js/inetumconf.js',
    'assets/logo/logo72.png',
    'assets/logo/logo96.png',
    'assets/logo/logo128.png',
    'assets/logo/logo144.png',
    'assets/logo/logo152.png',
    'assets/logo/logo192.png',
    'assets/img/ukn.png',
    'assets/lib/material/fonts.css',
    'assets/lib/material/materialdesignicons.min.css',
    'assets/lib/material/vuetify.min.css',
    'assets/lib/fonts/materialdesignicons-webfont.woff2',
    'assets/lib/vuejs/vue.min.js',
    'assets/lib/vuetify/vuetify.min.js'
];

const PATH_PONENTES = '/ponentes/';
const DFT_PONENTE = '/inetumconf/assets/img/ukn.png';

self.addEventListener('activate', event=> {
 
    event.waitUntil(
        caches.keys().then((names) => {
            for (let name of names) {
                if(name.startsWith(CACHE_NAME) && (name!=CACHE)) {
                    caches.delete(name);
                }
            }
        })
    );

});

self.addEventListener('fetch', event => {

    event.respondWith(
        caches.open(CACHE).then(function(cache) {
          return cache.match(event.request).then(function (response) {
            return response || fetch(event.request).then((response) => {

              if((!response.ok) && (response.url.includes(PATH_PONENTES))) {
                  console.log(response.url);
                  return cache.match(DFT_PONENTE).then((response) =>  {
                    console.log(response);
                    return response;
                  })
              } else {
                cache.put(event.request, response.clone());
                return response;
              }
              
            });
          });
        })
      );

});


self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(CACHE).then((cache) => {
        return cache.addAll(APP_SHELL)
      })
    );
  });
