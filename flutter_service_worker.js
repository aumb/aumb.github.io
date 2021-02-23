'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "426313f2f3133c2f20415344c4a22df3",
"favicon.ico": "6c08ca68dcd96df3d385b3cdb896e6d2",
"index.html": "5363b858eb63043e156d25d565a7a43e",
"/": "5363b858eb63043e156d25d565a7a43e",
"main.dart.js": "38c1151e9f82f3c6c48181fb71e3e367",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
".git/config": "0e4a0f5c468480274bc8b2a33dc15999",
".git/objects/0d/559b185045d44eae2e76ad4b749c4f41be8ba0": "8ff5d1eaadbb0c95ca8698d3bfaa0cb2",
".git/objects/3e/3686901da3b406f907abdeef4334099253f8d8": "644450dabb22931c42211a5f7e2bff64",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/ab/8cd0a28e04868c67871507ddbf0df2b9abd1b2": "ddb3a17c59fba01fdf03b0cbdeeb449f",
".git/objects/f3/bd6e1da6ff994e17e4657ff11f961eab37f4f8": "28ec2819191e86375284b1b5e4f93924",
".git/objects/c0/236b05472622371adfc803866d65a8f0dced49": "2b990fa1f7fdd2bc4195beefdb55753b",
".git/objects/ca/5c0ae876a5ffa58d6e1769c0fc13050ce1e0b3": "436fe8f08d7bac174a1f9a868576582d",
".git/objects/17/457d586af320b4f9928f420b21e0d100a8b3b2": "77d2fea9343e6d9c6bfa5080487c77b4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/9f4b2f538d1a06c109f5444be4cd58fe9a65c3": "1080ca6189d083c6bbc46e684c792340",
".git/objects/4c/b4b099701ede6e12c06d01082c285cf8e162fb": "da60ce1957ee10d9bc91d6968f72bbb3",
".git/objects/75/20a9a91d72fd890a637bfc1f9ba7c33357d643": "9148c5a239f5bc496bc2c94bcbde869f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/858799aeec123f5afab7fedb47e1f361796e2f": "88180426c8f46c1618a59134010af5c8",
".git/objects/0f/c47769c2c6f810b09ab3e31d571d7cda6520db": "94cc497f6ca80013834ef291376af6c1",
".git/objects/d4/bd28cd586a9cbc5099679c4a1b2e4d916149bf": "91131b2fa84d0509ed2e537c675c4b22",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8ce57ecf084efc096d93adfc2077dba8df0ce7": "5fd947e2b247b7c1c03d6f9c918d5dc6",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/de/45f1616a4525b167ec809b87463ae8df0ef48a": "09e67b3848f771024eb542dd797c3397",
".git/objects/cd/9e4e6fb9c3074cf192f1a875b339e7b0f7ffc8": "4999452bf6147ec6ad3c2e4704014ece",
".git/objects/f1/9c2add08e37e1ae247b8100622177660e2b35a": "7ad8772770fd4b1b9e912fcc702572fa",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/4a/9b3356dbc98bb5fd956d9752ae5c24805f21f8": "227f95a8b8ff5a33156ec3580b2e047a",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/8b/b51036b2e91995f2d38e05404b9eb991ece80f": "17c435a5cb8d2dfc7361cceb526ac9ee",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "d9d9b499b3f7a06768b54818c83e756e",
"assets/AssetManifest.json": "e222509c4f2dda01fb02e1cfb47a487c",
"assets/NOTICES": "d8ea11c2e4c0bb96c6652091a5d386eb",
"assets/FontManifest.json": "6d9f23dfafcb5a9a8dbccc7bcb551cca",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "51c686b86bc12382579d8283b7e76b6b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/illustration.png": "4fce4d861e4344e95ece534ddf3bfd4a",
"assets/assets/images/source_code.png": "95e0a4a95d6e11a5ed4490a23b5c1a49",
"assets/assets/gifs/loading_image.gif": "64f61468456845c455ac1d7281027ac7",
"assets/assets/fonts/RussoOne-Regular.ttf": "537d299a2fedf1a7541940cdbfa610d9",
"assets/assets/animations/loader.flr": "025daae18c20e2df37bbe2cdd92d1204"
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
