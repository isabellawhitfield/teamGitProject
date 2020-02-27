
$.ajax({
    url : 'https://api.geonet.org.nz/intensity?type=measured',
      type :'GET',
      dataType :'json',
      success:function(data){
          console.log(data);
        //   var markers =[];
        //   var i;

          for (i=0; i<data.features.length;i++){
              var obj = {};

              obj.lat = JSON.parse(data.features[0].geometry.coordinates[1]);
              obj.lng = JSON.parse(data.features[0].geometry.coordinates[0]);
            //   markers.push(obj);
          }
// console.log(markers);
    //   initMap(markers);
      }, error:function(){
          console.log('error');
      }
  });
  

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

