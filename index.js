var FIREBASE_APP = process.env.FIREBASE_APP;
if (!FIREBASE_APP) {
  throw new Error('Run with the name of your Firebase app as the value of the FIREBASE_APP environment variable.');
}

var child_process = require('child_process');
var Firebase = require('Firebase');
var hostnameListRef = new Firebase('https://' + FIREBASE_APP + '.firebaseio.com/hostnames');

hostnameListRef.on('child_added', function(snapshot) {
  var hostname = snapshot.val();
  console.log(hostname, 'connected');

  var previewUrl = 'http://' + hostname + ':8888/preview';
  child_process.exec('open ' + previewUrl);
});

console.log('Listening for competitors to connect…');
