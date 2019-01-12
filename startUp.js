const { getEntryJsHtml } = require('./utils/helpers');
const concurrently = require('concurrently');
// "npm run start-serve\" \"npm run start-dev src/index.js src/index.html\"
concurrently(
  'npm:start-serve ',
  'npm:start-dev ' + getEntryJsHtml().join(' '),
  {
    killOthers: ['failure', 'success']
  }
).then(
  () => console.log('startup successfully'),
  () => console.log('startup failed')
);
