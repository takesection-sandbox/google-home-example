const googlehome = require('google-home-notifier');
const language = 'ja';

googlehome.device('Google-Home', language);

googlehome.notify('てすと', function(res) {
  console.log(res);
});


