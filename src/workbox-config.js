workbox.routing.registerRoute(
    // Cache CSS files
    /.*\.css/,
    // Use cache but update in the background ASAP
    workbox.strategies.staleWhileRevalidate({
      // Use a custom cache name
      cacheName: 'css-cache',
    })
  );

  workbox.core.setCacheNameDetails({
    prefix: 'neighborhood-app',
    suffix: 'v1'
  });
  


module.exports = {
    globDirectory: './build/',
    globPaterns: ['**\/*.{html, js, svg, css}'],
    runtimeCaching: [{
        handler: 'cacheFirst',
        options: {
            cacheName: 'fonts',
            cacheExpiration: {maxEntries: 20}
        }
    }],
};

