console.log('Branching and merging');

var myKey = JSON.parse(apiKey);
console.log(myKey[0].key);

var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key='+ myKey[0].key +'&callback=initMap';
document.getElementsByTagName('body')[0].appendChild(script);
console.log(script);


var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -41.2911449, lng: 174.7814447},
    zoom: 10
  });
};
