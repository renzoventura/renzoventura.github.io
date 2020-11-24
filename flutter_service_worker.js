'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7ca381b259ea0d857bd38c515cc57899",
".git/config": "19bfea8b1ca046851b1b7bfaa3cd2c7c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "793d6ea9883301c61c4c2614f5f7c391",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ae85388e132bdb103d2e7b2deb61e1d5",
".git/logs/refs/heads/master": "ae85388e132bdb103d2e7b2deb61e1d5",
".git/logs/refs/remotes/origin/master": "36021f314f5eaf242679f710f6584a80",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2e/cee0d5498b6b71334acfab69cbf844713fc2f0": "d52c3caefd607b0d82bdfffe6426d4a2",
".git/objects/46/f2be38e3b51485c0e1ee7aee54af23ceb350e1": "7575783ce4a29d2d04ce19ad8c00a6cb",
".git/objects/58/7275f58ccdb3d58e10a5f863c5b6dd77504e81": "174a634a9ee3271a8403357cd139fede",
".git/objects/6c/04d6810b30b9808bf0c1d6adf609dd26796cb3": "62887b8472ca23f5a29a66aaef580208",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8e/dc79ab1f3e038b2bed8c87ad17de2c5bf1b1fd": "55ea48108a545adc4f1bb7c63848c61c",
".git/objects/96/a2f60356c0d45955cf2fb0b5ce3e00e3ae6229": "fcd87c0bc8f3a3beffd6ec9d7486ab7f",
".git/objects/9a/680067267d660ba94aad1f54f16faba921714a": "297a38f8485053d3263fd744ae88a622",
".git/objects/a2/b9f0c9b06106eb3e87baf82a07d530fc06dabe": "333dc1068e7ee1bddafbed20b709f29f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bf/c0619a07ba51817b9f238a76df7d07d434e472": "d617db3c15851a9b0266264aaeb3f354",
".git/refs/heads/master": "090d7dc0c77e0a97d51f234f6ee168a4",
".git/refs/remotes/origin/master": "0df0a4c1419d5ae92b96c32e23283fa6",
"assets/AssetManifest.json": "34db446b9915e205711c1936ffb2f669",
"assets/assets/images/asb_marathon.jpg": "23352fb4f7f1e13fbf38abe489d8b1c5",
"assets/assets/images/avatar.jpg": "f2c31fd66536e188a9b6922b094cfe9d",
"assets/assets/images/background.jpg": "acc4d4b20fc3c25ff83debc5cf50af0b",
"assets/assets/images/financial_meet/logo/logo.png": "7e458e045d0213c3c8e43de09ffd4844",
"assets/assets/images/flutter_projects/logo/logo.png": "58c2bb5f534b6a171df2529092770e92",
"assets/assets/images/glowd/logo/logo.png": "67c4fd163f2898bd90c2c19e196c127d",
"assets/assets/images/glowd/screenshots/1.PNG": "8b85b44602be73f95a82adc597492a05",
"assets/assets/images/glowd/screenshots/2.PNG": "7774f6d8161ff550e49ed7b277c1d348",
"assets/assets/images/glowd/screenshots/3.PNG": "267bef3a2f23285db71beec4dc1553f5",
"assets/assets/images/glowd/screenshots/4.PNG": "d753edaec405ae028a58d656881235ce",
"assets/assets/images/glowd/screenshots/5.PNG": "129e747b5a594da0fba76fae62383557",
"assets/assets/images/portfolio/logo/logo.png": "e9580ed78402deea4e9fa00e6e5d6472",
"assets/assets/images/portfolio/screenshots/1.PNG": "66fb48111a70f583d87d491812b827d9",
"assets/assets/images/portfolio/screenshots/3.PNG": "97ef533aa7d58581cd682d27f886f234",
"assets/assets/images/portfolio/screenshots/6.PNG": "9b5fb8d7b9c37bb4e28d8ed82a304397",
"assets/assets/images/portfolio/screenshots/7.PNG": "1756e3b24a78d62f8413747aa7653a06",
"assets/assets/images/relit/logo/logo.png": "d083de04050567d77ed16b4c685dbe07",
"assets/assets/images/relit/screenshots/1.PNG": "90336f8e6e4d00aa43f35f9acd789553",
"assets/assets/images/relit/screenshots/2.PNG": "184715b31d1b57659a4f207a8c79d66c",
"assets/assets/images/relit/screenshots/3.PNG": "8442309ba5bd8d90419144ea92bfe80d",
"assets/assets/images/relit/screenshots/4.PNG": "0de0f6d78c0ef54943e2750ca91cf4c3",
"assets/assets/images/shade/logo/logo.png": "92392725b09118b05f216dac06104771",
"assets/assets/images/shade/screenshots/1.PNG": "1a14a5357963fa0036d662de07d969fd",
"assets/assets/images/shade/screenshots/2.PNG": "b39744b3426b237d43bf77936c9f7389",
"assets/assets/images/shade/screenshots/3.PNG": "9f2745ee3734ec2060d553c54245d526",
"assets/assets/images/shade/screenshots/4.PNG": "ca5d28df703088cf9ca54ac0113d61e7",
"assets/assets/pdf/RENZO_VENTURA_CV.pdf": "be94607e8542f73d8aa90e3dd872f23a",
"assets/FontManifest.json": "3ee9f0ca9fc3f340d8986145d82ea462",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "90e7b2b393b9d01faf142e7340b3934f",
"assets/packages/community_material_icon/fonts/materialdesignicons-webfont.ttf": "baded94134f273450a473a4962111324",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "e9580ed78402deea4e9fa00e6e5d6472",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b1a59f84971e772d9f84c04dadbef4c2",
"/": "b1a59f84971e772d9f84c04dadbef4c2",
"main.dart.js": "378c592a45d99d8320851d1bbd95d78c",
"manifest.json": "aa4e8d69b70cbe75fc75863391ea1da3",
"version.json": "9a4dddba415c9ee5265cd5f5d9963a6a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
