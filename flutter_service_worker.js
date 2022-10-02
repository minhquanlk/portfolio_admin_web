'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "62df7004821905cbe4cbbfc327dc8f56",
"/": "62df7004821905cbe4cbbfc327dc8f56",
"main.dart.js": "1efc587d018c09c3e0e7f4706ea70b58",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/ORIG_HEAD": "d3034fc0f432bd811c69512126b32d47",
".git/config": "35d1a8db4ee06d0f78be0f840b4debcf",
".git/objects/0d/5f1bd6b91a17ceb5b598908ff65a304419b023": "b72e3c8bd60c6f4ce4253c5c7088aec3",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/3e/ec3a6211957c4213fc06cf39b179495b118f41": "28d1bef42ee557419aae253f73ca65f5",
".git/objects/04/c9ba9299697a9d88faafacc9648d3aecfdb283": "74fffeeabe8fee1cf33dc71b7ae3de54",
".git/objects/35/42c860f92fc0e54cf15c7879255d24b3cf5811": "d69c0853ab7937e843b68b25ffeed85e",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/51/361415413a9b3698fb8ba45f893146f8e5177b": "69b49133f2647d1a861017bc0d709f49",
".git/objects/9d/0096066e5fb8a6d60047c3f1113c70193bf316": "08c21b698156997d07922c1aa47b480c",
".git/objects/a3/f09f61a0270e6b7965f60a0ee8102bb3178fd6": "4cc711d07c06208f895f22349b8ef0b7",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/d0/7fa8ae5fd950b6285c673d8ce68cb74a6b8c40": "5bcd4fd9ae49565a415b117c06cd36be",
".git/objects/df/392b054c145b3165d818b998880d29af635aac": "edb2bff420187431ee807015020ec5e8",
".git/objects/bd/61c94ae08161e00116d42537d5cb628bd93f07": "b0222d70b2cccb20ec3fa66ec9da6ecd",
".git/objects/d1/a69738e7251267cdd5b2127e7207168d2d8740": "e7bdc389d09b46c2a41686ade9075ae3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/7050786ab66492b048c7608718fa043eefcf92": "fd0c888a2ad9ef92c4e22712a50c374d",
".git/objects/d8/622474f9467a2361bd635d3715736b03905bc7": "1780d82c383ef506d78eeb6a874d2dfa",
".git/objects/d8/ec64b48d7e0618b1cd7afc9b859c35d482c45b": "bd4070b48a20c769d793c5324eaa930f",
".git/objects/d8/6962606ff0d01f98f3ba8357e6c20a5803fdc0": "674930559398f1ad98a11a973774f542",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/2e01a9133882da2f07355841f3451f6c219485": "299cec0d66e16d7e79ab588bacd83b04",
".git/objects/f5/4e2e5db5cf94fdffaa5e9b78d7f5d8fb174c14": "07dd0ff46ebb7eda2bdc11bc61073533",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/fff309a0419625c162e85e26dc9e3f76fbba02": "ffe2c7dfa1962121549fdad2a216369e",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/1f/eb7e2ca0550f576cbc124a312f760937b43707": "2b3153473323e91c4c85368286633ebf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/d6f8effadcfdc5942c850acb8319491b4216d1": "6e05ad2066bade26fdcc3b9c058c8cae",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/98007e13edb929cba4882255064d6ebe1f60c6": "4dfe8447cc35ff1345e754aaa4de0e55",
".git/objects/5d/7e442f0ab525da984450eaf9aa32f7efdb33bd": "f9ba041b23b83fed6c69772e05317e1b",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/01/8c0e49e89585c95047b19564c3666645b5fe8c": "6fc5d985e781c7a50c90261952fd2b74",
".git/objects/39/31a7c3d784d6407b2fe8ad24c708100ff13648": "da494b33771155ab73692b3b073b681e",
".git/objects/52/f64fbc76ae7bdab3de827b56619aabe0364c46": "9d3401093d7be0227e2e0fbc9d1dcd1d",
".git/objects/ba/5f0544bc611de568dcd0ccd6e0cd206ab91b08": "bb39edecd993c391e8fd7dbc0f7f08e7",
".git/objects/a0/64031841264fffc0d3aa50e2f07bdb6898e33d": "03af1dbfb2bbdc23fcb82a7b2f800091",
".git/objects/a7/5b5caaf8936f65d18cbff7e42d81aae7ad4be3": "2d517fda7848b1b3ae38ee1ea258d6a1",
".git/objects/a9/03dc209bb56936574acb55ac8c8ba94da40ab1": "764441ec40fbcc6bf0ecb8c92e13d60d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ff/931ccfb0f1668327df58e737c56f80695bb1ac": "c12bb409d44dd08a2138d891e23555ef",
".git/objects/f6/d8fcd0b3ee4bfdd40a384d92c2a7e085017ad3": "b7762ac6bfa1d36ae803913647a61bff",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/2d9a681d6ff605b01737bd470c947fc107295a": "3abfdb6890e9019d41d71615539cd398",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/48/f9226157cd62d021f4a27a82719f7e2deebb52": "8bf7b5735eab4066fca5a01aca799d3d",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/616f152d93e49238336fea3b8d59dfebd1eba5": "24d9e6f82267ffe8c8af3395ce166c8b",
".git/objects/71/c968cbb893a63e9b31f232bc30999874c6d3dc": "e7ee42014b6fc40ceffba392bfa60cd0",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/de421f980341c33b816ec3f2644bf45f5fd305": "9581f98316233ee76bc9941b33206fb1",
".git/objects/82/711fc1f05d2f16453458b93e35a6b22df17be9": "cae00501df4de75869aa6a8dd546cb14",
".git/objects/49/593d76bab06c35ea13f314dd853dcf2db9247c": "5c02ffd596587b1bf130c368930775df",
".git/objects/78/110bbc7ac873ecb3f6918d418444f97336a5a1": "1fa04a8cee13a7913e6a727746465545",
".git/objects/8b/524c86ddb9b20768854885c367b1bb7c6d64af": "032779559352f55357e38e29a1d986a4",
".git/objects/25/3eedf87e0e9ba3017c2959edbbe9275f11ddf5": "e8f1e4252342853e53c0a06d372046b9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "78d3f17ce13eb3c3c6d51ff02aab253a",
".git/logs/refs/heads/main": "3df582dcbf4038c25c14ec67236b402e",
".git/logs/refs/remotes/origin/main": "f311d7b098a2185d26fa4e9991bbc586",
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
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "0651ac9ef719afdf8997cf07ebbc49f5",
".git/refs/remotes/origin/main": "0651ac9ef719afdf8997cf07ebbc49f5",
".git/index": "d18d7039518d225bda3ffe1a7490bd93",
".git/COMMIT_EDITMSG": "596d0be90c5de4c181f5ae8b9aea753f",
".git/FETCH_HEAD": "e5667f85710432203358be27166c1e9f",
"assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"assets/NOTICES": "d12900e6b5f9a38d6bfa53df62ef5f74",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
