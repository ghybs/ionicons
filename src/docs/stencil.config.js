const sass = require('@stencil/sass');

exports.config = {
  namespace: 'DocsSite',
  srcDir: 'site/',
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'www',
      dir: '../../docs/',
      serviceWorker: false,
      empty: false,
      baseUrl: '/ionicons/docs', // For local development.
    }
  ],
  globalStyle: 'site/global/style.css',
  copy: [
    { src: '../../../dist/css/ionicons.min.css', dest: './css/ionicons.min.css' },
    { src: '../../../dist/ionicons/', dest: './ionicons/' },
    { src: '../../../dist/ionicons.js', dest: './ionicons.js' },
    { src: '../../../dist/cheatsheet.html', dest: './cheatsheet.html' },
    { src: '../archived/v1/', dest: './v1/' },
    { src: '../archived/v2/', dest: './v2/' },
    { src: './index.html', dest: './usage/index.html' },
    { src: './test', dest: './test' },
    { src: '../../../dist/ionicons/data.json', dest: './data.json' }
  ]
};
