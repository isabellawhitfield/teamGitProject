console.log('Branching and merging')
$(document).ready(function(){
	// accessing key from json file
	var myKey = JSON.parse(apiKey);
	console.log(myKey[0]);
	myKey = myKey[0].key;
	console.log(myKey);


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
  