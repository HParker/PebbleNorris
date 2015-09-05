/**
 * The Chuck Norris app!
 *
 * Remember all the important things we know about chuck norris.
 */

var UI = require('ui');
var ajax = require('ajax');
var url = "http://api.icndb.com/jokes/random";

var main = new UI.Card({
  title: 'Chuck Norris',
  body: 'Press select.',
  scrollable: true
});

main.on('click', 'select', function(event) {
  ajax(
    {
      url: url,
      type:'json'
    },
    function(data) {
      main.subtitle(data.value.joke);
    },
    function(error) {
      console.log('Download failed: ' + error);
    });
});

main.show();
