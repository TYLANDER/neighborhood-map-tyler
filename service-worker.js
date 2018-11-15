/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "/precache-manifest.0b1f46ebc4d2cbf1e14d3c78ae97f971.js"
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
workbox.precaching.precacheAndRoute([
  {
    "url": "asset-manifest.json",
    "revision": "863f757ffe8c9346bfbd2ca5ed5d2c82"
  },
  {
    "url": "favicon.ico",
    "revision": "c92b85a5b907c70211f4ec25e29a8c4a"
  },
  {
    "url": "index.html",
    "revision": "dec85b796c2de9f41b2b6db21f3da0b3"
  },
  {
    "url": "manifest.json",
    "revision": "2f717775d17bf3a581acf2903353545f"
  },
  {
    "url": "precache-manifest.0b1f46ebc4d2cbf1e14d3c78ae97f971.js",
    "revision": "0b1f46ebc4d2cbf1e14d3c78ae97f971"
  },
  {
    "url": "static/css/1.cfde3f7d.chunk.css",
    "revision": "d9deb81801df024d40b4d5041b3d7f75"
  },
  {
    "url": "static/css/main.32a6ec30.chunk.css",
    "revision": "f818e19542e4787aa5c55c231967a4e4"
  },
  {
    "url": "static/js/1.8e0e13ca.chunk.js",
    "revision": "cd466450af8302cc3cbdedf1ecda1ec7"
  },
  {
    "url": "static/js/main.5836c506.chunk.js",
    "revision": "0900037e26337d2b189061ad4f9e42ee"
  },
  {
    "url": "static/js/runtime~main.229c360f.js",
    "revision": "3b44b5daad3fcbefa8b355dfbc3d9630"
  }
]);

workbox.routing.registerNavigationRoute("/index.html", {
  
  blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
});

workbox.routing.registerRoute(
  ''
)
